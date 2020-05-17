import { makeStyles } from '@material-ui/core';

const styles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        ...(theme?.themeSpecifics?.customBackground || {}),
    },
    word: {
        textAlign: 'center',
        color: theme.palette.primary.contrastText,
        padding: '1rem',
        fontSize: '2rem',
        fontWeight: 500,

        '&.definition': {
            fontSize: '1.5rem',
            fontWeight: 400,
        },
    },
    deleteIcon: {
        color: theme.palette.primary.contrastText,
        position: 'absolute',
        top: 90,
        left: '10%',
    },
    textPrimary: {
        color: theme.palette.primary.contrastText,
    },
}));

export default styles;
