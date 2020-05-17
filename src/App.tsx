import React, { FC, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Route, Switch, HashRouter, Redirect } from 'react-router-dom';
import { ThemeProvider, Container, CssBaseline } from '@material-ui/core';
import { ErrorBoundary } from 'react-error-boundary';
import { RootState } from './types';
import { composeTheme } from './functions/composeTheme';

// Routes
import Home from './routes/Home';
import Add from './routes/Add';
import List from './routes/List';
import Settings from './routes/Settings';

// Components
import TopBar from './components/TopBar';
import Drawer from './components/Drawer';
import ConnectedDialog from './components/ConnectedDialog';
import ConnectedChip from './components/ConnectedChip';
import ErrorFallback from './components/ErrorFallback';

const mapStateToProps = (state: RootState) => ({
    theme: state.status.theme,
});
const connector = connect(mapStateToProps);
type ReduxProps = ConnectedProps<typeof connector>;

const App: FC<ReduxProps> = ({ theme }) => {
    const [openDrawer, setOpenDrawer] = useState<boolean>(false);
    const toggleDrawer = () => setOpenDrawer(!openDrawer);

    return (
        <ErrorBoundary FallbackComponent={ErrorFallback} onError={(error) => console.error(error)}>
            <ThemeProvider theme={composeTheme(theme)}>
                <CssBaseline />

                <HashRouter>
                    <Container disableGutters maxWidth="md">
                        <TopBar toggleDrawer={toggleDrawer} />

                        <Switch>
                            <Route exact path="/add" component={Add} />
                            <Route exact path="/list" component={List} />
                            <Route exact path="/settings" component={Settings} />
                            <Route exact path="/" component={Home} />
                            <Route render={() => <Redirect to="/" />} />
                        </Switch>

                        <Drawer showDrawer={openDrawer} toggleDrawer={toggleDrawer} />

                        <ConnectedDialog />
                        <ConnectedChip />
                    </Container>
                </HashRouter>
            </ThemeProvider>
        </ErrorBoundary>
    );
};

export default connector(App);
