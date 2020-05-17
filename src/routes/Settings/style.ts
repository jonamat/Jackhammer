import { makeStyles } from '@material-ui/core';

const styles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    form: {
        margin: theme.spacing(2),
        width: '60%',
        '& .MuiFormLabel-root': {
            color: theme.palette.primary.contrastText,
        },
        '& .MuiInput-root': {
            marginBottom: theme.spacing(1),
            color: theme.palette.primary.contrastText,
        },
    },
    item: {
        color: theme.palette.primary.contrastText,
    },
}));

export default styles;
