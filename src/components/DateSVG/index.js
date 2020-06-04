import React from 'react';

const DateSVG = (props) => (
  <svg className="DateSVG"
    {...props}>
    <use xlinkHref="#DateSymbol" />
  </svg>
);

export default DateSVG;
