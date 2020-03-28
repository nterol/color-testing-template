import React, { useState } from "react";

import ColorChart from "../ColorChart";
import { Row } from "../commons/commonStyles";
import Moji from "../commons/Moji";
import { usePalette } from "../../contexts/PaletteContext";
import { useDispatchMemory, useMemory } from "../../contexts/MemoryContext";
import { SaveContainer, ColorLabContainer } from "./styles";

function ColorLab() {
  const palette = usePalette();
  const memory = useMemory();
  const dispatchMemory = useDispatchMemory();
  const [editable, setEditable] = useState(false);
  const [title, setTitle] = useState(`My palette #${memory.length + 1}`);

  const savePalette = () => {
    const now = new Date();
    dispatchMemory({
      type: "add palette",
      payload: {
        createdAt: now,
        title,
        palette
      }
    });
  };

  const handleChange = e => {
    setTitle(e.target.value);
  };

  return (
    <ColorLabContainer border={palette.spectrum2}>
      {editable ? (
        <div>
          <input onChange={handleChange} value={title} />
          <button onClick={() => setEditable(false)}>Ok</button>
        </div>
      ) : (
        <div onClick={() => setEditable(true)}>
          <h1>{title}</h1>
        </div>
      )}
      <Row>
        <ColorChart />
        <SaveContainer onClick={savePalette}>
          <Moji moji="🔖" type="save palette" />
        </SaveContainer>
      </Row>
    </ColorLabContainer>
  );
}

export default ColorLab;
