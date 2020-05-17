import React, { FC } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Zoom, Chip } from '@material-ui/core';
import { RootState } from '../../types';
import styles from './style';

const mapStateToProps = (state: RootState) => ({
    chip: state.status.chip,
});
const connector = connect(mapStateToProps);
type ReduxProps = ConnectedProps<typeof connector>;

const ConnectedChip: FC<ReduxProps> = ({ chip }) => {
    const { label, root, icon } = styles();

    return (
        <Zoom in={chip.open}>
            <Chip classes={{ label, root, icon }} label={chip.label} variant="default" icon={chip.icon || undefined} />
        </Zoom>
    );
};
export default connector(ConnectedChip);
