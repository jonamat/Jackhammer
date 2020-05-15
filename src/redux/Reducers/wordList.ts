import { Reducer } from 'redux';
import { WordListReducer, WordListActionTypes } from '../../types';

const initialState: WordListReducer = {
    words: [],
};

const status: Reducer<WordListReducer, WordListActionTypes> = (state = initialState, action) => {
    switch (action.type) {
        case 'UPLOAD_WORD_LIST':
            return {
                ...state,
                words: action.words,
            };

        default:
            return state;
    }
};

export default status;
