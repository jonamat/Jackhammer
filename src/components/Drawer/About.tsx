import React, { FC } from 'react';
import { Box, Typography } from '@material-ui/core';
import { t } from 'app-translator';

const About: FC = () => (
    <Box p={2}>
        <Typography>
            <strong>{t('Version')}: </strong> 1.0.0
        </Typography>
        <Typography>
            <strong>{t('License')}: </strong> MIT
        </Typography>
        <Typography>
            <strong>{t('Developer')}: </strong> Jonathan Mataloni
        </Typography>
        <Typography>
            <strong>{t('Website')}: </strong>{' '}
            <a href="https://wedial.it/JonathanMataloni" target="_blank" rel="noopener noreferrer">
                JM on Wedial.it
            </a>
        </Typography>
    </Box>
);

export default About;
