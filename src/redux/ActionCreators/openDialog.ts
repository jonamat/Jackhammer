import { DialogStatus, DialogCreator } from '../../types';

const openDialog: DialogCreator = ({ title, content }: Required<Omit<DialogStatus, 'open'>>) => (dispatch): void => {
    dispatch({
        type: 'UPDATE_DIALOG_STATUS',
        dialog: {
            open: true,
            title,
            content,
        },
    });
};

export default openDialog;
