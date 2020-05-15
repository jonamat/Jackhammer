import { DialogCreator } from '../../types';

const closeDialog: DialogCreator = () => (dispatch, getState): void => {
    const { dialog } = getState().status;

    dispatch({
        type: 'UPDATE_DIALOG_STATUS',
        dialog: {
            // Mantain content for closure transition
            ...dialog,
            open: false,
        },
    });
};

export default closeDialog;
