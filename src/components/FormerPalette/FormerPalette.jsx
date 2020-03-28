import React, { Suspense } from 'react';

import { useMemory } from '../../contexts/MemoryContext';

const SavedPaletteContainer = React.lazy(() =>
    import('./SavedPaletteContainer')
);

const MemoryContainer = React.lazy(() => import('./MemorContainer'));

const MemoryPalette = React.lazy(() => import('../MemoryPalette'));

function FormerPalette() {
    const memory = useMemory();

    return memory.length > 0 ? (
        <Suspense fallback={<div>Loading...</div>}>
            <SavedPaletteContainer>
                <h2>Previous palette</h2>
                {memory.length > 0 &&
                    memory.map(save => (
                        <MemoryContainer key={save.title}>
                            <MemoryPalette memory={save} />
                        </MemoryContainer>
                    ))}
            </SavedPaletteContainer>
        </Suspense>
    ) : null;
}

export default FormerPalette;
