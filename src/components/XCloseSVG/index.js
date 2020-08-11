import React from 'react';

const XCloseSVG = (props) => {
  return (
    <svg className="XCloseSVG"
      {...props}>
      <use xlinkHref="#XCloseSymbol" />
    </svg>
  );
};

export default XCloseSVG;
