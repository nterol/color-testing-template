import React from "react";

import { Dot } from "./styles";

function LineDots({ nb, color, margin = 15, offset = 0, top }) {
  return Array.from({ length: nb }).map((e, i) => (
    <Dot
      key={`${nb}-${i}`}
      top={top}
      left={i ? i * 10 + margin * i + offset : i + offset}
      color={typeof color === "object" ? color[i] : color}
    />
  ));
}

export default LineDots;
