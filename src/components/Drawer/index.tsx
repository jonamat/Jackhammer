import React, { FC } from 'react';
import { bindActionCreators } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Drawer as MUIDrawer, List, ListItem, ListItemIcon, ListItemText, Box } from '@material-ui/core';
import { t } from 'app-translator';
import { openDialog } from './../../redux';
import { RootState } from '../../types';
import styles from './style';

// Drawer icons
import FormatListBulletedRoundedIcon from '@material-ui/icons/FormatListBulletedRounded';
import ArchiveRoundedIcon from '@material-ui/icons/ArchiveRounded';
import UnarchiveRoundedIcon from '@material-ui/icons/UnarchiveRounded';
import InfoRoundedIcon from '@material-ui/icons/InfoRounded';
import TuneRoundedIcon from '@material-ui/icons/TuneRounded';

// Sub-Components
import ExportWordList from './ExportWordList';
import ImportWordList from './ImportWordList';
import About from './About';

interface DrawerProps {
    showDrawer: boolean;
    toggleDrawer(): void;
}

const mapStateToProps = (state: RootState) => ({
    words: state.wordList.words,
});
const mapDispatchToProps = (dispatch: any) => bindActionCreators({ openDialog }, dispatch);
const connector = connect(mapStateToProps, mapDispatchToProps);
type ReduxProps = ConnectedProps<typeof connector>;

const Drawer: FC<ReduxProps & DrawerProps & RouteComponentProps> = ({
    history,
    words,
    showDrawer,
    toggleDrawer,
    openDialog,
}) => {
    const classes = styles();

    const handleList = () => history.push('/list');

    const handleImport = () => {
        openDialog({
            title: t('Load an archive'),
            content: <ImportWordList />,
        });
    };

    const handleExport = () => {
        // Avoid to export empty archives
        if (!words.length) {
            openDialog({
                title: t('There are no words to export'),
                content: <Box p={2}>{t('You must create a list of words before exporting them')}</Box>,
            });
        } else {
            openDialog({
                title: 'Export archive',
                content: <ExportWordList />,
            });
        }
    };

    const handleSettings = () => history.push('/settings');

    const handleAbout = () => {
        openDialog({
            title: 'JackHammer',
            content: <About />,
        });
    };

    return (
        <MUIDrawer className={classes.root} open={showDrawer} onClose={toggleDrawer} onClick={toggleDrawer}>
            {[
                {
                    label: t('List'),
                    icon: <FormatListBulletedRoundedIcon />,
                    onclick: handleList,
                },
                {
                    label: t('Import'),
                    icon: <ArchiveRoundedIcon />,
                    onclick: handleImport,
                },
                {
                    label: t('Export'),
                    icon: <UnarchiveRoundedIcon />,
                    onclick: handleExport,
                },
                {
                    label: t('Settings'),
                    icon: <TuneRoundedIcon />,
                    onclick: handleSettings,
                },
                {
                    label: t('About'),
                    icon: <InfoRoundedIcon />,
                    onclick: handleAbout,
                },
            ].map((list) => (
                <List key={list.label}>
                    <ListItem button onClick={list.onclick}>
                        <ListItemIcon>{list.icon}</ListItemIcon>
                        <ListItemText primary={list.label} />
                    </ListItem>
                </List>
            ))}
        </MUIDrawer>
    );
};

export default connector(withRouter(Drawer));
