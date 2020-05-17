import React, { FC } from 'react';
import { Box, Grid, Divider, Button } from '@material-ui/core';
import {
    EmailShareButton,
    EmailIcon,
    TelegramShareButton,
    TelegramIcon,
    ViberShareButton,
    ViberIcon,
    WhatsappShareButton,
    WhatsappIcon,
} from 'react-share';
import { useStore } from 'react-redux';
import { RootState } from '../../types';
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';

const ExportWordList: FC = () => {
    const {
        wordList: { words },
    } = useStore<RootState>().getState();

    const FILENAME = 'JackHammer_wordlist';
    const link = `https://${
        process.env.PROJECT_URL
    }/download-data-uri.html?filename=${FILENAME}&datauri=data:application/json;base64,${btoa(JSON.stringify(words))}`;
    const htmlLink = `Download <a href="${link}">${FILENAME}</a>`;

    const shareButtonProps = {
        url: link,
        cordovaOptions: { target: '_system' },
    };

    const iconProps = {
        size: 32,
        round: true,
    };

    const handleDownload = () => window.open(link, '_system');

    return (
        <Box p={2}>
            <Grid container alignItems="center" justify="space-between">
                <EmailShareButton subject="JackHammer archive" url={htmlLink}>
                    <EmailIcon {...iconProps} />
                </EmailShareButton>

                <TelegramShareButton {...shareButtonProps}>
                    <TelegramIcon {...iconProps} />
                </TelegramShareButton>

                <ViberShareButton {...shareButtonProps}>
                    <ViberIcon {...iconProps} />
                </ViberShareButton>

                <WhatsappShareButton {...shareButtonProps}>
                    <WhatsappIcon {...iconProps} />
                </WhatsappShareButton>
            </Grid>
            <Divider style={{ marginTop: 15, marginBottom: 15 }} />
            <Grid container alignItems="center" justify="space-around">
                <Button startIcon={<GetAppRoundedIcon />} variant="outlined" color="inherit" onClick={handleDownload}>
                    Download
                </Button>
            </Grid>
        </Box>
    );
};

export default ExportWordList;
