import { ChipCreator, ChipStatus } from './../../types';
import { CHIP_TIMEOUT } from '../../config';

/** Avoid to trigger chip clousure when called fast multiple times */
let chipTimer: NodeJS.Timeout | null = null;

const openChip: ChipCreator = ({ label, icon }: Required<Omit<ChipStatus, 'open'>>) => (dispatch): void => {
    if (chipTimer) {
        clearTimeout(chipTimer);
        chipTimer = null;
    }

    dispatch({
        type: 'UPDATE_CHIP_STATUS',
        chip: {
            open: true,
            label,
            icon,
        },
    });

    // Use zoom out transation after CHIP_TIMEOUT ms
    chipTimer = setTimeout(() => {
        dispatch({
            type: 'UPDATE_CHIP_STATUS',
            chip: {
                open: false,
                label,
                icon,
            },
        });
        chipTimer = null;
    }, CHIP_TIMEOUT);
};

export default openChip;
