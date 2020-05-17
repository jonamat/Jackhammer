import { makeStyles } from '@material-ui/core';

const styles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    form: {
        '& .MuiFormControl-root': {
            width: '60vw',
        },
        '& .MuiFormLabel-root': {
            color: theme.palette.primary.contrastText,
        },
        '& .MuiInput-root': {
            marginBottom: theme.spacing(1),
            color: theme.palette.primary.contrastText,
        },
    },
    button: {
        margin: theme.spacing(3),
    },
}));

export default styles;
