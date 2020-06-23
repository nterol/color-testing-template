import React from 'react';

import SaveButton from '../SaveButton';
import { ColorChartContainer, Color } from '../styles';

function ColorChart({ title, setSelected, selected, palette }) {
  return (
    <ColorChartContainer>
      {Object.keys(palette).map((colorName) => (
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
  );
}

export default ColorChart;
