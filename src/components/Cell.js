import React from 'react';

import { StyledCell } from './styles/StyledCell';
import { TETROMINOS } from '../tettrominos';

const Cell = (props) => {
    return (
        <StyledCell type={props.type} color={TETROMINOS[props.type].color}>
            cell
        </StyledCell>
    );
};

export default Cell;