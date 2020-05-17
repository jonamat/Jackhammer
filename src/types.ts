import { ThemeOptions } from '@material-ui/core';
import { UUIDv4 } from 'uuid-v4-validator';

/** Mapped custom themes */
export interface ThemeCollection {
    [themeName: string]: CustomThemeOptions;
}

interface InjectThemeOptions extends ThemeOptions {
    themeSpecifics?: any;
}

/** Base custom vars for MUI theme */
export interface CustomThemeOptions {
    name: string;
    fontFamily: string;
    backgroundColor: string;
    themeColor: string;
    textColor: string;
    inject?: InjectThemeOptions;
}

/** A single Word element entered by the user with its definition/translation and generated id */
export interface Word {
    id: UUIDv4;
    word: string;
    definition: string;
}

/** Custom type guard for Word */
export function isWord(obj: any): obj is Word {
    return Object.keys(obj).every((key) => {
        switch (key) {
            case 'id':
                if (obj['id'] instanceof UUIDv4 || obj['id']['_id']) return true;
                break;

            case 'word':
                if (typeof obj['word'] === 'string') return true;
                break;

            case 'definition':
                if (typeof obj['definition'] === 'string') return true;
                break;

            default:
                return false;
        }
        return false;
    });
}

/** Custom type guard for exterally imported archives */
export const isValidArchive = (obj: any): obj is Array<Word> =>
    Array.isArray(obj) && !!obj.length && obj.every((word) => isWord(word));

/**
 * ############################
 * REDUX TYPES
 * ############################
 */

/**
 * Utils
 */

export type Thunk<A> = {
    (...args: Array<any>): {
        (dispatch: (action: A | Function) => void, getState: () => RootState): void;
    };
};

export interface DialogStatus {
    open: boolean;
    title: string | null;
    content: JSX.Element | null;
}

export interface ChipStatus {
    open: boolean;
    label: string | null;
    icon: JSX.Element | null;
}

export type ChipContent = Required<Omit<ChipStatus, 'open'>>;

/**
 * ----------------------------
 * WordList
 * ----------------------------
 */

/** Reducers */
export interface WordListReducer {
    words: Array<Word>;
}

/** Actions */
export type UploadWordListAction = {
    readonly type: 'UPLOAD_WORD_LIST';
    words: Array<Word>;
};

/**  Action creators */
export type UploadWordListCreator = Thunk<UploadWordListAction>;

/**  Actions intersection */
export type WordListActionTypes = UploadWordListAction;

/**
 * ----------------------------
 * Status
 * ----------------------------
 */

/** Reducers */
export interface StatusReducer {
    dialog: DialogStatus;
    language: string;
    theme: string;
    chip: ChipStatus;
}

/** Actions */
export interface DialogAction {
    readonly type: 'UPDATE_DIALOG_STATUS';
    dialog: DialogStatus;
}

export interface ChipAction {
    readonly type: 'UPDATE_CHIP_STATUS';
    chip: ChipStatus;
}

export interface SetLanguageAction {
    readonly type: 'SET_LANGUAGE';
    language: string;
}

export interface SetThemeAction {
    readonly type: 'SET_THEME';
    theme: string;
}

/**  Action creators */
export type DialogCreator = Thunk<DialogAction>;
export type ChipCreator = Thunk<ChipAction>;
export type SetLanguageCreator = Thunk<SetLanguageAction>;
export type SetThemeCreator = Thunk<SetThemeAction>;

/**  Actions intersection */
export type StatusActionTypes = DialogAction | SetLanguageAction | SetThemeAction | ChipAction;

/**
 * ----------------------------
 * RootState
 * ----------------------------
 */

export type RootState = {
    readonly wordList: WordListReducer;
    readonly status: StatusReducer;
};
