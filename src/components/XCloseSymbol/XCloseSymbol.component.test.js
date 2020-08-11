import React from 'react';
import { shallow } from 'enzyme';
import XCloseSymbol from './';

describe('XCloseSymbol', () => {
  it('renders without crashing', () => {
    expect(shallow.bind(shallow, <XCloseSymbol />)).not.toThrow();
  });

  it('renders as expected', () => {
    expect(shallow(<XCloseSymbol />)).toMatchSnapshot();
  });
});
