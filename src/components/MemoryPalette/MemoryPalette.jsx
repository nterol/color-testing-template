import React, { useCallback } from 'react';

import { useDispatchMemory } from '../../contexts/MemoryContext';
import Moji from '../commons/Moji';
import {
    Tone,
    RemoveButton,
    ToneContainer,
    CardContainer,
    CardHeader,
} from './styles';

function MemoryPalette({ memory }) {
    const dispatchMemory = useDispatchMemory();
    const dMemory = useCallback(action => dispatchMemory(action), [
        dispatchMemory,
    ]);

    const { palette, createdAt, title } = memory;

    const handleRemove = () => {
        dMemory({ type: 'remove palette', payload: createdAt });
    };

    return (
        <CardContainer>
            <CardHeader>
                <p>{title}</p>
                <RemoveButton onClick={handleRemove}>
                    <Moji moji="❌" type="unsave palette" />
                </RemoveButton>
            </CardHeader>
            <ToneContainer>
                {Object.keys(palette).map(colorName => {
                    return (
                        <Tone
                            color={palette[colorName]}
                            key={`${title}_${colorName}`}
                        />
                    );
                })}
            </ToneContainer>
        </CardContainer>
    );
}

export default MemoryPalette;
