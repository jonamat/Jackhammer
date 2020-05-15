import { SetThemeCreator } from '../../types';

const setTheme: SetThemeCreator = (theme: string) => (dispatch): void => {
    localStorage.setItem('theme', theme);

    dispatch({
        type: 'SET_THEME',
        theme,
    });
};

export default setTheme;
