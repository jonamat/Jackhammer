import React from 'react';
import { t } from 'app-translator';
import openChip from './openChip';
import { Word, UploadWordListCreator, ChipContent } from './../../types';
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';

const addWord: UploadWordListCreator = (word: Word) => (dispatch, getState): void => {
    const {
        wordList: { words },
    } = getState();

    const chipContent: ChipContent = {
        label: t('Added'),
        icon: React.createElement(AddCircleOutlineRoundedIcon, null, null),
    };

    // Update local storage
    localStorage.setItem('wordList', JSON.stringify(words.concat(word)));

    // Display a feedback to user
    dispatch(openChip(chipContent));

    dispatch({
        type: 'UPLOAD_WORD_LIST',
        words: words.concat(word),
    });
};

export default addWord;
