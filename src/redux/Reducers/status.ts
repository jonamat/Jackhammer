import { Reducer } from 'redux';
import { StatusReducer, StatusActionTypes } from '../../types';
import { DEFAULT_LANGUAGE, DEFAULT_THEME } from '../../config';

const initialState: StatusReducer = {
    dialog: {
        open: false,
        title: null,
        content: null,
    },
    chip: {
        open: false,
        label: null,
        icon: null,
    },
    language: DEFAULT_LANGUAGE,
    theme: DEFAULT_THEME,
};

const status: Reducer<StatusReducer, StatusActionTypes> = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_DIALOG_STATUS':
            return {
                ...state,
                dialog: action.dialog,
            };

        case 'UPDATE_CHIP_STATUS':
            return {
                ...state,
                chip: action.chip,
            };

        case 'SET_LANGUAGE':
            return {
                ...state,
                language: action.language,
            };

        case 'SET_THEME':
            return {
                ...state,
                theme: action.theme,
            };

        default:
            return state;
    }
};

export default status;
