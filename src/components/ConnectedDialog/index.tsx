import React, { FC } from 'react';
import { bindActionCreators } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import { Dialog, DialogTitle } from '@material-ui/core';
import { RootState } from '../../types';
import { closeDialog } from '../../redux';

const mapStateToProps = (state: RootState) => ({
    dialog: state.status.dialog,
});
const mapDispatchToProps = (dispatch: any) => bindActionCreators({ closeDialog }, dispatch);
const connector = connect(mapStateToProps, mapDispatchToProps);

type ReduxProps = ConnectedProps<typeof connector>;

const ConnectedDialog: FC<ReduxProps> = ({ dialog, closeDialog }) => (
    <Dialog open={dialog.open} onClose={closeDialog}>
        <DialogTitle>{dialog.title}</DialogTitle>
        {dialog.content}
    </Dialog>
);

export default connector(ConnectedDialog);
