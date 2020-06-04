import React from 'react';
import { shallow } from 'enzyme';
import LocationSymbol from './';

describe('LocationSymbol', () => {
  it('renders without crashing', () => {
    expect(shallow.bind(shallow, <LocationSymbol />)).not.toThrow();
  });

  it('renders as expected', () => {
    expect(shallow(<LocationSymbol />)).toMatchSnapshot();
  });
});
