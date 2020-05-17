import { CustomThemeOptions } from '../../../types';

export const darkTheme: CustomThemeOptions = {
    name: 'Dark',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    backgroundColor: '#1f1f1f',
    themeColor: '#111111',
    textColor: '#dbdbdb',
    inject: {
        themeSpecifics: {
            customBackground: {
                backgroundImage: "url('assets/backgrounds/dark.jpg')",
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
            },
        },
    },
};
