import React from 'react';

import Cell from './Cell';

const Stage = (props) => {
    return (
        <div>
            {props.stage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
        </div>
    );
};

export default Stage;