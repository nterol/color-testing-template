import React from 'react';
import './styles.css';

import { PaletteProvider } from './contexts/PaletteContext';
import { MemoryProvider } from './contexts/MemoryContext';

import Template from './components/Template';
import FormerPalette from './components/FormerPalette';
import ColorPicker from './components/ColorPicker';
import {
    AppContainer,
    GLobalStyle,
    SpacerNoRecursive,
} from './components/commons/commonStyles';

const RawApp = () => (
    <SpacerNoRecursive>
        <h1>COLOR COMPOSITION TESTING TEMPLATE</h1>
        <Template />
        <ColorPicker />
        <FormerPalette />
    </SpacerNoRecursive>
);

export default function App() {
    return (
        <PaletteProvider>
            <MemoryProvider>
                <GLobalStyle />
                <AppContainer>
                    <RawApp />
                </AppContainer>
            </MemoryProvider>
        </PaletteProvider>
    );
}
