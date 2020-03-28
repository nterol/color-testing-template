import React from "react";

import { usePalette, useDispatchPalette } from "../../contexts/PaletteContext";

import { ColorChartContainer, Color } from "./styles";
function ColorChart() {
  const palette = usePalette();
  const dispatchPalette = useDispatchPalette();

  return (
    <ColorChartContainer>
      {Object.keys(palette).map(colorName => (
        <Color
          onChange={e => {
            console.log("CCC", colorName);
            dispatchPalette({
              type: "change color",
              payload: { colorName, colorValue: e.target.value }
            });
          }}
          value={palette[colorName]}
          name={colorName}
          type="color"
          key={colorName}
          color={palette[colorName]}
        />
      ))}
    </ColorChartContainer>
  );
}

export default ColorChart;
