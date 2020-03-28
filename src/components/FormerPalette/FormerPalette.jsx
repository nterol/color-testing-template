import React, { Suspense } from "react";

import { useMemory } from "../../contexts/MemoryContext";
import { SavedPaletteContainer, MemoryContainer } from "./styles";

const MemoryPalette = React.lazy(() => import("../MemoryPalette"));

function FormerPalette() {
  const memory = useMemory();
  console.log("COUCOU", memory);
  return (
    <SavedPaletteContainer>
      <Suspense fallback={<div>Where 's my mind </div>}>
        {memory.length > 0 &&
          memory.map(save => (
            <MemoryContainer>
              <MemoryPalette memory={save} />
            </MemoryContainer>
          ))}
      </Suspense>
    </SavedPaletteContainer>
  );
}

export default FormerPalette;
