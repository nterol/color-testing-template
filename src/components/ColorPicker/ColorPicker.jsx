import React, { useState, Suspense } from 'react';

import SaveButton from './SaveButton';
import { usePalette } from '../../contexts/PaletteContext';
import { ColorPickerContainer, ColorChartContainer, Color } from './styles';

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

                <ColorChartContainer>
                    {Object.keys(palette).map(colorName => (
                        <Color
                            key={`color-picker-${colorName}`}
                            color={palette[colorName]}
                            onClick={() => {
                                let newSelected;
                                if (selected === colorName) newSelected = false;
                                else newSelected = colorName;
                                setSelected(newSelected);
                            }}
                        />
                    ))}
                    <SaveButton title={title} palette={palette} />
                </ColorChartContainer>
            </div>
            <Suspense fallback={<div>loading color slider</div>}>
                {selected && (
                    <ColorSlider
                        selectedColor={selected}
                        color={palette[selected]}
                    />
                )}
            </Suspense>
        </ColorPickerContainer>
    );
}

export default ColorPicker;
