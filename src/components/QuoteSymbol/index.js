import React from 'react';

const QuoteSymbol = (props) => (
  <symbol
    viewBox="0 0 24 24"
    className="QuoteSymbol"
    id="QuoteSymbol"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M0 0h24v24H0z" fill="none"/>
    <path fill="#ff406a" d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
  </symbol>
);
export default QuoteSymbol;
