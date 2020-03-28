import React from 'react';

import { useDispatchMemory } from '../../../contexts/MemoryContext';
import { SaveButtonContainer } from '../styles';
import Moji from '../../commons/Moji';

function SaveButton({ title, palette }) {
    const dispatchMemory = useDispatchMemory();
    return (
        <SaveButtonContainer
            onClick={() =>
                dispatchMemory({
                    type: 'add palette',
                    payload: { title, palette },
                })
            }
        >
            <Moji moji="💾" type="save this palette" />
        </SaveButtonContainer>
    );
}

export default SaveButton;
