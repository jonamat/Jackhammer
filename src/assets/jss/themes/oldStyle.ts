import { CustomThemeOptions } from '../../../types';

export const oldStyle: CustomThemeOptions = {
    name: 'Old Style',
    fontFamily: '"Special Elite", sans-serif',
    backgroundColor: '#fdf8d6',
    themeColor: '#f4ecc2',
    textColor: '#3f321c',
    inject: {
        themeSpecifics: {
            customBackground: {
                backgroundImage: "url('assets/backgrounds/oldStyle.jpg')",
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
            },
        },
    },
};
