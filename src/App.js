import React from "react";
import "./styles.css";

import { PaletteProvider } from "./contexts/PaletteContext";
import { MemoryProvider } from "./contexts/MemoryContext";

import Mosaic from "./components/Mosaic";
import ColorLab from "./components/ColorLab";
import FormerPalette from "./components/FormerPalette";
import ColorPicker from "./components/ColorPicker";
import { AppContainer, GLobalStyle } from "./components/commons/commonStyles";

export default function App() {
  return (
    <PaletteProvider>
      <MemoryProvider>
        <GLobalStyle />
        <AppContainer>
          <h1>COLOR COMPOSITION TESTING TEMPLATE</h1>
          <Mosaic />
          <ColorLab />
          <ColorPicker />
          <FormerPalette />
        </AppContainer>
      </MemoryProvider>
    </PaletteProvider>
  );
}
