import { CustomThemeOptions } from '../../../types';

export const blackTheme: CustomThemeOptions = {
    name: 'Black',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    backgroundColor: '#000000',
    themeColor: '#000000',
    textColor: '#888',
    inject: {
        overrides: {
            MuiDrawer: {
                paperAnchorLeft: {
                    borderRight: '1px solid #252525',
                },
            },
            MuiDialog: {
                paper: {
                    border: '1px solid #252525',
                },
            },
        },
    },
};
