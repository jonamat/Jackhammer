import React, { FC, FormEvent } from 'react';
import { bindActionCreators } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { Button, FormControl, InputLabel, Input, Grid } from '@material-ui/core';
import { UUIDv4 } from 'uuid-v4-validator';
import { t } from 'app-translator';
import { addWord } from '../../redux';
import { Word } from '../../types';
import styles from './style';

const mapDispatchToProps = (dispatch: any) => bindActionCreators({ addWord }, dispatch);
const connector = connect(null, mapDispatchToProps);
type ReduxProps = ConnectedProps<typeof connector>;

type SubmitEvent = FormEvent<HTMLFormElement>;

const Add: FC<ReduxProps & RouteComponentProps> = ({ addWord }) => {
    const classes = styles();

    const handleSubmit = (event: SubmitEvent) => {
        event.preventDefault();
        const form = document.getElementById('add-word') as HTMLFormElement;
        const formData = new FormData(form);

        // Safari and old android devices don't support native form validation
        if (!formData.get('word') || !formData.get('definition')) {
            Array.from(form.getElementsByTagName('input')).some((inputField, index, array) => {
                if (inputField === document.activeElement) {
                    const nextField = array[index + 1] || array[0];

                    // Safari doesn't support focus() when keyboad is open
                    nextField.focus();
                    return true;
                }
            });
            return;
        }

        const newWord: Word = {
            id: new UUIDv4(),
            word: formData.get('word') as string,
            definition: formData.get('definition') as string,
        };

        (document.getElementById('add-word') as HTMLFormElement).reset();
        document.getElementById('word')?.focus();

        addWord(newWord);
    };

    return (
        <Grid className={classes.root} container direction="column" justify="center" alignItems="center">
            <Grid item>
                <form className={classes.form} id="add-word" action="#" onSubmit={handleSubmit} autoComplete="off">
                    <Grid container direction="column" justify="center" alignItems="center">
                        <FormControl>
                            <InputLabel htmlFor="word">{t('Word to learn')}</InputLabel>
                            <Input id="word" name="word" required autoFocus autoComplete="off" type="text" />
                        </FormControl>
                        <FormControl>
                            <InputLabel htmlFor="definition">{t('Definition or translation')}</InputLabel>
                            <Input id="definition" name="definition" required autoComplete="off" type="text" />
                        </FormControl>
                        <Button className={classes.button} variant="outlined" type="submit">
                            {t('Add')}
                        </Button>
                    </Grid>
                </form>
            </Grid>
        </Grid>
    );
};

export default connector(Add);
