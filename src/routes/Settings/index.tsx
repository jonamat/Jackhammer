import React, { FC } from 'react';
import { bindActionCreators } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { t, getAvailableLanguages } from 'app-translator';
import { FormControl, InputLabel, Select, Grid, MenuItem } from '@material-ui/core';
import { ThemeCollection } from '../../types';
import { setTheme, setLanguage } from '../../redux';
import { RootState } from '../../types';
import * as themes from '../../assets/jss/themes';
import styles from './style';

const mapStateToProps = (state: RootState) => ({
    language: state.status.language,
    theme: state.status.theme,
});
const mapDispatchToProps = (dispatch: any) => bindActionCreators({ setTheme, setLanguage }, dispatch);
const connector = connect(mapStateToProps, mapDispatchToProps);
type ReduxProps = ConnectedProps<typeof connector>;

const Settings: FC<ReduxProps & RouteComponentProps> = ({ theme, language, setTheme, setLanguage }) => {
    const classes = styles();

    return (
        <Grid className={classes.root} container direction="column" justify="center" alignItems="center">
            <FormControl className={classes.form}>
                <InputLabel htmlFor="language">{t('Language')}</InputLabel>
                <Select id="language" value={language} onChange={(event) => setLanguage(event.target.value)}>
                    {getAvailableLanguages()?.map((language: string) => (
                        <MenuItem className={classes.item} key={language} value={language}>
                            {language}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <FormControl className={classes.form}>
                <InputLabel htmlFor="theme">{t('Theme')}</InputLabel>
                <Select id="theme" value={theme} onChange={(event) => setTheme(event.target.value)}>
                    {Object.keys(themes).map((themeName: string) => (
                        <MenuItem
                            className={classes.item}
                            key={themeName}
                            value={(themes as ThemeCollection)[themeName].name}
                        >
                            {(themes as ThemeCollection)[themeName].name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Grid>
    );
};

export default connector(Settings);
