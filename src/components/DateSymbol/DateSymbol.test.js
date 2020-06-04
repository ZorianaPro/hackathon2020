import React from 'react';
import { shallow } from 'enzyme';
import DateSymbol from './';

describe('DateSymbol', () => {
  it('renders without crashing', () => {
    expect(shallow.bind(shallow, <DateSymbol />)).not.toThrow();
  });

  it('renders as expected', () => {
    expect(shallow(<DateSymbol />)).toMatchSnapshot();
  });
});
