import React, { FC } from 'react';
import { Button, AppBar, Toolbar, Grid } from '@material-ui/core';
import styles from './style';

type ButtonContents = Array<{
    label: string;
    onClick(): void;
}>;

interface Props {
    buttons: ButtonContents;
}

const BottomBar: FC<Props> = ({ buttons }) => {
    const classes = styles();
    return (
        <AppBar position="static" className={classes.root} component="footer">
            <Toolbar>
                <Grid container justify="center" alignItems="center" wrap="nowrap">
                    {buttons.map((button) => (
                        <Grid key={button.label} item container justify="center" alignItems="center">
                            <Button className={classes.button} onClick={button.onClick}>
                                {button.label}
                            </Button>
                        </Grid>
                    ))}
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default BottomBar;
