import React from 'react';
import { shallow } from 'enzyme';
import QuoteSymbol from './';

describe('QuoteSymbol', () => {
  it('renders without crashing', () => {
    expect(shallow.bind(shallow, <QuoteSymbol />)).not.toThrow();
  });

  it('renders as expected', () => {
    expect(shallow(<QuoteSymbol />)).toMatchSnapshot();
  });
});
