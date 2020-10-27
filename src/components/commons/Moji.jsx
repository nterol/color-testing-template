import React from 'react';

const Moji = ({ moji, type }) => (
  <span role="img" aria-label={type}>
    {moji}
  </span>
);

export default Moji;
