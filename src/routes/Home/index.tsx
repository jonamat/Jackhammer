import React, { FC, useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { Collapse, Grid, IconButton, Divider, Button, Typography } from '@material-ui/core';
import { t } from 'app-translator';
import { deleteWord } from '../../redux';
import { RootState, Word } from '../../types';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import BottomBar from '../../components/BottomBar';
import styles from './style';

const mapStateToProps = (state: RootState) => ({
    words: state.wordList.words,
});
const mapDispatchToProps = (dispatch: any) => bindActionCreators({ deleteWord }, dispatch);
const connector = connect(mapStateToProps, mapDispatchToProps);
type ReduxProps = ConnectedProps<typeof connector>;

const Home: FC<ReduxProps & RouteComponentProps> = ({ words, deleteWord, history }) => {
    const classes = styles();
    const sortWord = (): Word => words[Math.floor(Math.random() * words.length)];
    const [sortedWord, changeWord] = useState<Word>(sortWord());
    const [setShowDefinition, showDefinition] = useState<boolean>(false);

    const reset = (): void => {
        showDefinition(false);
        changeWord(sortWord());
    };

    const handleDeleteWord = (): void => {
        const currentWord = sortedWord;
        deleteWord(currentWord);
        reset();
    };

    const buttons = [
        { label: t('Change'), onClick: reset },
        { label: t('Show'), onClick: (): void => showDefinition(true) },
    ];

    return (
        <>
            <Grid className={classes.root} container direction="column" justify="center" alignItems="center">
                {words?.length ? (
                    <Grid item>
                        <IconButton
                            className={classes.deleteIcon}
                            edge="start"
                            aria-label="go back"
                            color="inherit"
                            onClick={handleDeleteWord}
                        >
                            <DeleteRoundedIcon />
                        </IconButton>
                        <div className={classes.word}>{sortedWord.word}</div>

                        <Collapse in={setShowDefinition}>
                            {setShowDefinition && (
                                <>
                                    <Divider />
                                    <div className={classes.word + ' definition'}>{sortedWord.definition}</div>
                                </>
                            )}
                        </Collapse>
                    </Grid>
                ) : (
                    <>
                        <Typography align="center" variant="h6" className={classes.textPrimary} gutterBottom>
                            {t('Add words to start')}
                        </Typography>
                        <Button variant="outlined" onClick={(): void => history.push('/add')}>
                            {t('Add')}
                        </Button>
                    </>
                )}
            </Grid>
            {!!words.length && <BottomBar buttons={buttons} />}
        </>
    );
};

export default connector(Home);
