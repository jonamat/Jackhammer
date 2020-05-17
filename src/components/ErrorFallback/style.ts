import { makeStyles } from '@material-ui/core';

const styles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        '& > *': {
            margin: theme.spacing(2),
        },
    },
}));

export default styles;
