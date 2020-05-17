import { makeStyles } from '@material-ui/core';

const styles = makeStyles((theme) => ({
    root: {
        '& .MuiDrawer-paper': {
            color: theme.palette.primary.contrastText,
            backgroundColor: theme.palette.background.default,
        },
        '& .MuiListItemIcon-root': {
            color: theme.palette.primary.contrastText,
        },
    },
    divider: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
}));

export default styles;
