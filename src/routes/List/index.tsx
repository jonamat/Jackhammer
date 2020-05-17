import React, { FC } from 'react';
import { bindActionCreators } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { IconButton, Grid, Button, Typography } from '@material-ui/core';
import { t } from 'app-translator';
import { RootState } from '../../types';
import { deleteWord } from '../../redux';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import styles from './style';

const mapStateToProps = (state: RootState) => ({
    words: state.wordList.words,
});
const mapDispatchToProps = (dispatch: any) => bindActionCreators({ deleteWord }, dispatch);
const connector = connect(mapStateToProps, mapDispatchToProps);
type ReduxProps = ConnectedProps<typeof connector>;

const List: FC<ReduxProps & RouteComponentProps> = ({ words, deleteWord, history }) => {
    const classes = styles();

    return (
        <Grid className={classes.root} container direction="column" justify="center" alignItems="center">
            {words.length ? (
                <Grid item>
                    <Grid className={classes.overflowBox} container justify="center" alignItems="center">
                        {words.map((word, index) => (
                            <Grid
                                className={classes.wordContainer}
                                key={index}
                                item
                                container
                                justify="center"
                                alignItems="center"
                            >
                                <Grid item xs={1}>
                                    <IconButton
                                        aria-label="go back"
                                        color="inherit"
                                        onClick={(): any => deleteWord(word)}
                                    >
                                        <DeleteRoundedIcon />
                                    </IconButton>
                                </Grid>

                                <Grid className="left" item xs={5}>
                                    {word.word}
                                </Grid>

                                <Grid className="right" item xs={6}>
                                    {word.definition}
                                </Grid>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            ) : (
                <>
                    <Typography align="center" variant="h6" className={classes.textPrimary} gutterBottom>
                        {t('Add words to start')}
                    </Typography>
                    <Button variant="outlined" onClick={() => history.push('/add')}>
                        {t('Add')}
                    </Button>
                </>
            )}
        </Grid>
    );
};

export default connector(List);
