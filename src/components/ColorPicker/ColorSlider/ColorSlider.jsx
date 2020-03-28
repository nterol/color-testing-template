import React from 'react';
import Chrome from 'react-color/lib/Chrome';

import { useDispatchPalette } from '../../../contexts/PaletteContext';

function ColorSlider({ color, selectedColor }) {
    const dispatchPalette = useDispatchPalette();
    const handleChangeComplete = color => {
        dispatchPalette({
            type: 'change color',
            payload: { colorValue: color.hex, colorName: selectedColor },
        });
    };
    return (
        <div style={{ padding: '32px' }}>
            <Chrome
                color={color}
                onChangeComplete={handleChangeComplete}
            />
        </div>
    );
}

export default ColorSlider;
