import React from 'react';

const LocationSVG = (props) => (
  <svg className="LocationSVG"
    {...props}>
    <use xlinkHref="#LocationSymbol" />
  </svg>
);

export default LocationSVG;
