import React, { FC, ChangeEvent, useRef } from 'react';
import { Box, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { closeDialog, openDialog, importWordList } from '../../redux';
import { t } from 'app-translator';
import { bindActionCreators } from 'redux';
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';

const ImportWordList: FC = () => {
    const actions = bindActionCreators({ openDialog, closeDialog, importWordList }, useDispatch());
    const fileInput = useRef<HTMLInputElement>();

    const handleLoadArchive = (event: ChangeEvent<HTMLInputElement>): void => {
        event.preventDefault();
        actions.closeDialog();

        const file = (event.target as HTMLInputElement)?.files?.[0];

        // Operation aborted by user
        if (!file) return;

        if (file.type !== 'application/json') {
            actions.openDialog({
                title: t('Operation failed'),
                content: <Box p={2}> {t('File not valid. You can only import files exported from JackHammer')} </Box>,
            });
            return;
        }

        const reader = new FileReader();
        reader.readAsText(file);
        reader.onload = (event: ProgressEvent<FileReader>): void => {
            if (!event?.target?.result) {
                actions.openDialog({
                    title: t('Operation failed'),
                    content: <Box p={2}> {t('Cannot load the file')} </Box>,
                });
            } else actions.importWordList(JSON.parse(event.target.result as string));
        };
        reader.onerror = () => {
            actions.openDialog({
                title: t('Operation failed'),
                content: <Box p={2}> {t('Unknown error')} </Box>,
            });
        };
    };

    const handleClickRedirect = () => fileInput.current?.click();

    return (
        <>
            <Box p={2} display="flex" alignItems="center" justifyContent="center">
                <Button
                    startIcon={<GetAppRoundedIcon />}
                    variant="outlined"
                    color="inherit"
                    onClick={handleClickRedirect}
                >
                    {t('Import')}
                </Button>
            </Box>
            <input
                style={{ visibility: 'hidden' }}
                ref={fileInput}
                id="load-archive"
                type="file"
                accept="application/JSON"
                onChange={handleLoadArchive}
            />
        </>
    );
};

export default ImportWordList;
