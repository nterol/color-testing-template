import React, { createContext, useReducer, useContext } from "react";

const PaletteContext = createContext();
const SetPaletteContext = createContext();

const defaultPalette = {
  color1: "#ffc65f",
  color2: "#dc534d",
  color3: "#7f89be",
  color4: "#94c4c8",
  spectrum1: "#25201f",
  spectrum2: "#f6f2e2"
};

function paletteReducer(state, { type, payload }) {
  console.log("TYPE", type);
  console.log("PAYLOAD", payload);
  switch (type) {
    case "change color":
      return {
        ...state,
        [payload.colorName]: payload.colorValue
      };
    default:
      throw new Error("No other options");
  }
}

export function PaletteProvider({ children }) {
  const [palette, dispatch] = useReducer(paletteReducer, defaultPalette);

  return (
    <PaletteContext.Provider value={palette}>
      <SetPaletteContext.Provider value={dispatch}>
        {children}
      </SetPaletteContext.Provider>
    </PaletteContext.Provider>
  );
}

export function usePalette() {
  const paletteContext = useContext(PaletteContext);

  if (!paletteContext) throw Error("No palette context found");

  return paletteContext;
}

export function useDispatchPalette() {
  const setPaletteContext = useContext(SetPaletteContext);
  if (!setPaletteContext) throw new Error("No set palette function found");

  return setPaletteContext;
}
