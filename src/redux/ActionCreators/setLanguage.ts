import { SetLanguageCreator } from '../../types';
import { setLanguage as _SetLanguage } from 'app-translator';

const setLanguage: SetLanguageCreator = (language: string) => (dispatch): void => {
    localStorage.setItem('language', language);

    _SetLanguage(language);

    dispatch({
        type: 'SET_LANGUAGE',
        language,
    });
};

export default setLanguage;
