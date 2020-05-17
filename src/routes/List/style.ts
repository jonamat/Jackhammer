import { makeStyles } from '@material-ui/core';

const styles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    textPrimary: {
        color: theme.palette.primary.contrastText,
    },
    overflowBox: {
        position: 'relative',
        width: '95vw',
        maxHeight: '80vh',
        overflowY: 'auto',
    },
    wordContainer: {
        position: 'relative',
        color: theme.palette.primary.contrastText,
        padding: theme.spacing(2),
        fontWeight: 500,
        wordBreak: 'break-word',
        '& .left': {
            paddingRight: 7,
            textAlign: 'right',
        },
        '& .right': {
            paddingLeft: 7,
            fontWeight: 400,
            borderLeft: '2px solid ' + theme.palette.primary.contrastText,
        },
    },
}));

export default styles;
