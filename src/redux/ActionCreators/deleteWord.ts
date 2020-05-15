import React from 'react';
import { t } from 'app-translator';
import openChip from './openChip';
import { Word, UploadWordListCreator, ChipContent } from '../../types';
import RemoveCircleOutlineRoundedIcon from '@material-ui/icons/RemoveCircleOutlineRounded';

const deleteWord: UploadWordListCreator = (word: Word) => (dispatch, getState): void => {
    const {
        wordList: { words },
    } = getState();

    const chipContent: ChipContent = {
        label: t('Deleted'),
        icon: React.createElement(RemoveCircleOutlineRoundedIcon, null, null),
    };

    const updatedWordList = words.reduce<Array<Word>>((prev, curr) => {
        if (curr.id !== word.id) prev.push(curr);
        return prev;
    }, []);

    // Update local storage
    localStorage.setItem('wordList', JSON.stringify(updatedWordList));

    // Display a feedback to user
    dispatch(openChip(chipContent));

    dispatch({
        type: 'UPLOAD_WORD_LIST',
        words: updatedWordList,
    });
};

export default deleteWord;
