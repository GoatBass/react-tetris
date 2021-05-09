import React from 'react';

import { createStage } from '../gameHelpers';
import { StyleTetrisWrapper, StyledTetris } from './styles/StyledTetris';

import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

const Tetris = (props) => {
    return (
        <StyleTetrisWrapper>
            <StyledTetris>
                <Stage stage={createStage()} />
                <aside>
                    <div>
                        <Display text='Score' />
                        <Display text='Rows' />
                        <Display text='Level' />
                    </div>
                    <StartButton />
                </aside>
            </StyledTetris>
        </StyleTetrisWrapper>
    );
};

export default Tetris;