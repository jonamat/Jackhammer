import { CustomThemeOptions } from '../../../types';

export const lightTheme: CustomThemeOptions = {
    name: 'Light',
    fontFamily: "'Quicksand', sans-serif",
    backgroundColor: '#fff',
    themeColor: '#e7ffff',
    textColor: '#404040',
    inject: {
        themeSpecifics: {
            customBackground: {
                backgroundImage: "url('assets/backgrounds/light.jpg')",
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
            },
        },
    },
};
