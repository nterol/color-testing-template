import React from "react";

import { BandWidth } from "./styles";

function Bands({ nb, color }) {
  return Array.from({ length: nb }).map((e, i) => (
    <BandWidth key={`${nb}-${i}`} color={color} left={i ? i * 10 + 5 * i : i} />
  ));
}

export default Bands;
