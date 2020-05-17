import { createMuiTheme, Theme } from '@material-ui/core';
import { DEFAULT_THEME } from './../config/index';
import { CustomThemeOptions } from '../types';
import { common } from '../assets/jss/common';
import * as themes from '../assets/jss/themes';

/** Use a CustomThemeOptions object to create a MUI Theme with common properties */
export const composeTheme = (themeName: string): Theme => {
    const themeList = Object.values(themes);
    const theme =
        themeList.find((theme: CustomThemeOptions) => theme.name === themeName) ||
        (themeList.find((theme: CustomThemeOptions) => theme.name === DEFAULT_THEME) as CustomThemeOptions);

    return createMuiTheme(common(theme), theme.inject || {});
};
