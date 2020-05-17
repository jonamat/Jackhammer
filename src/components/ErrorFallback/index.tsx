import React, { FC } from 'react';
import { t } from 'app-translator';
import { Typography, Grid, Button } from '@material-ui/core';
import styles from './style';

const ErrorFallback: FC = () => {
    const classes = styles();

    const handleClearCache = () => {
        localStorage.clear();
        location.reload();
    };

    return (
        <Grid container direction="column" justify="center" alignItems="center" className={classes.root}>
            <Typography align="center" variant="h4">
                {t('An error occurred')}
            </Typography>
            <Typography align="center">
                {t('Try to restart the app. If the problem persists, click the button below to clear the app cache')}
            </Typography>
            <Button variant="outlined" onClick={handleClearCache}>
                {t('Clear cache')}
            </Button>
        </Grid>
    );
};

export default ErrorFallback;
