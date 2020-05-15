import { getAvailableLanguages, setLanguage, getDictionary } from 'app-translator';
import { SetLanguageCreator } from '../../types';

/** Try to fetch data from local storage and save them in redux */
const loadLanguage: SetLanguageCreator = () => (dispatch): void => {
    const parsed = localStorage.getItem('language');
    const browserLangName = getDictionary(window.appTranslator.language)?.name;

    if (parsed && getAvailableLanguages()?.includes(parsed)) {
        setLanguage(parsed);

        dispatch({
            type: 'SET_LANGUAGE',
            language: parsed,
        });
    } else if (browserLangName) {
        setLanguage(browserLangName);

        dispatch({
            type: 'SET_LANGUAGE',
            language: browserLangName,
        });
    }
    // else leave default lang
};
export default loadLanguage;
