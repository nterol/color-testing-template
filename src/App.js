import React from 'react';
import './styles.css';

import { PaletteProvider } from './contexts/PaletteContext';
import { MemoryProvider } from './contexts/MemoryContext';

import Template from './components/Template';
import FormerPalette from './components/FormerPalette';
import ColorPicker from './components/ColorPicker';
import {
    GLobalStyle,
    // SpacerNoRecursive,
} from './components/commons/commonStyles';

import styles from './common.module.scss';

console.log(styles);

const RawApp = () => (
    <div className={styles.container}>
        <div style={{margin: "18px"}}>
            <h1>COLOR COMPOSITION TESTING TEMPLATE</h1>
            <Template />
        </div>
        <div>
            <ColorPicker />
            <FormerPalette />
        </div>
    </div>
);

export default function App() {
    return (
        <PaletteProvider>
            <MemoryProvider>
                <GLobalStyle />
                <RawApp />
            </MemoryProvider>
        </PaletteProvider>
    );
}
