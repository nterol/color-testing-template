import React, { useState, Suspense } from 'react';

import { usePalette } from '../../contexts/PaletteContext';
import { ColorPickerContainer } from './styles';
import ColorChart from './ColorChart/ColorChart';

const ColorSlider = React.lazy(() => import('./ColorSlider/ColorSlider'));

function ColorPicker() {
    const defaultTitle = 'My palette #1';
    const [selected, setSelected] = useState(false);
    const [title, setTitle] = useState(defaultTitle);
    const palette = usePalette();
    console.log(selected);
    return (
        <ColorPickerContainer>
            <div>
                <h2
                    contentEditable={true}
                    suppressContentEditableWarning={true}
                    onChange={({ target: { value } }) => setTitle(value)}
                >
                    {title}
                </h2>
                <ColorChart
                    title={title}
                    setSelected={setSelected}
                    selected={selected}
                    palette={palette}
                />
                <Suspense fallback={<div>loading color slider</div>}>
                    {selected && (
                        <ColorSlider
                            selectedColor={selected}
                            color={palette[selected]}
                        />
                    )}
                </Suspense>
            </div>
        </ColorPickerContainer>
    );
}

export default ColorPicker;
