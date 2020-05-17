import React, { FC } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { withRouter } from 'react-router';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import styles from './style';

// Nav icons
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import AddRoundedIcon from '@material-ui/icons/AddRounded';

interface Props extends RouteComponentProps {
    toggleDrawer(): void;
}

const TopBar: FC<Props> = ({ toggleDrawer, history, location }) => {
    const classes = styles();

    const isHomepage = location.pathname === '/';

    return (
        <AppBar position="static">
            <Toolbar>
                {isHomepage && (
                    <IconButton
                        edge="start"
                        aria-label="menu"
                        className={classes.menuButton}
                        color="inherit"
                        onClick={toggleDrawer}
                    >
                        <MenuRoundedIcon />
                    </IconButton>
                )}

                {!isHomepage && (
                    <IconButton
                        edge="start"
                        aria-label="go back"
                        className={classes.menuButton}
                        color="inherit"
                        onClick={(): void => history.push('/')}
                    >
                        <ArrowBackRoundedIcon />
                    </IconButton>
                )}

                <Typography variant="h6" className={classes.title}>
                    JackHammer
                </Typography>

                {isHomepage && (
                    <IconButton color="inherit" onClick={(): void => history.push('/add')}>
                        <AddRoundedIcon />
                    </IconButton>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default withRouter(TopBar);
