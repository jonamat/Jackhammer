import { makeStyles } from '@material-ui/core';

const styles = makeStyles((theme) => ({
    root: {
        top: 'auto',
        bottom: 0,
    },
    button: {
        flexGrow: 1,
        color: theme.palette.primary.contrastText,
    },
}));

export default styles;
