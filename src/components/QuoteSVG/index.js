import React from 'react';

const QuoteSVG = (props) => (
  <svg className="QuoteSVG" {...props}>
    <use xlinkHref="#QuoteSymbol" />
  </svg>
);

export default QuoteSVG;
