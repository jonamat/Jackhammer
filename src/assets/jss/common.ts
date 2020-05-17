import { CustomThemeOptions } from '../../types';
import { ThemeOptions } from '@material-ui/core';

export const common = (theme: CustomThemeOptions): ThemeOptions => ({
    overrides: {
        MuiContainer: {
            root: {
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                position: 'relative',
                fontFamily: theme.fontFamily,
                backgroundColor: theme.backgroundColor,
            },
        },
        MuiInput: {
            underline: {
                '&::after': {
                    borderColor: theme.textColor,
                },
                '&::before': {
                    borderColor: theme.textColor + ' !important',
                },
            },
            root: {
                '& .MuiSvgIcon-root': {
                    color: theme.textColor,
                },
            },
        },
        MuiDialog: {
            paper: {
                fontFamily: theme.fontFamily,
                backgroundColor: theme.backgroundColor,
                color: theme.textColor,

                '& a': {
                    color: 'inherit',
                },
            },
        },
        MuiDivider: {
            root: {
                backgroundColor: theme.textColor,
                opacity: 0.25,
            },
        },
        MuiButton: {
            outlined: {
                color: theme.textColor,
                borderColor: theme.textColor,
            },
        },
    },
    palette: {
        background: {
            default: theme.backgroundColor,
            paper: theme.backgroundColor,
        },
        primary: {
            main: theme.themeColor,
            contrastText: theme.textColor,
        },
    },
    typography: {
        allVariants: {
            fontFamily: theme.fontFamily,
        },
    },
});
