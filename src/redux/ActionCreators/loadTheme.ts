import { SetThemeCreator } from './../../types';
import * as themes from '../../assets/jss/themes';

/** Try to fetch data from local storage and save them in redux */
const loadTheme: SetThemeCreator = () => (dispatch): void => {
    const parsed = localStorage.getItem('theme');

    if (parsed && Object.values(themes).find((theme) => theme.name === parsed)) {
        dispatch({
            type: 'SET_THEME',
            theme: parsed,
        });
    }
};
export default loadTheme;
