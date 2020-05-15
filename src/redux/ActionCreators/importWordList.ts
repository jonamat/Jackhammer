import React from 'react';
import { t } from 'app-translator';
import { Box } from '@material-ui/core';
import { UploadWordListCreator, ChipContent, isValidArchive } from './../../types';
import openChip from './openChip';
import openDialog from './openDialog';
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';

const importWordList: UploadWordListCreator = (archive: any) => (dispatch): void => {
    if (isValidArchive(archive)) {
        // Update local storage
        localStorage.setItem('wordList', JSON.stringify(archive));

        const chipContent: ChipContent = {
            label: t('Import successful'),
            icon: React.createElement(AddCircleOutlineRoundedIcon, null, null),
        };

        // Display a feedback to user
        dispatch(openChip(chipContent));

        dispatch({
            type: 'UPLOAD_WORD_LIST',
            words: archive,
        });
    } else {
        dispatch(
            openDialog({
                title: t('Operation failed'),
                content: React.createElement(Box, { p: 2 }, t('Selected file is invalid or corrupted')),
            }),
        );
    }
};

export default importWordList;
