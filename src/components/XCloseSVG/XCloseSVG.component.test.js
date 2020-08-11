import React from 'react';
import { shallow } from 'enzyme';
import XCloseSVG from './';

describe('XCloseSVG', () => {
  it('renders without crashing', () => {
    expect(shallow.bind(shallow, <XCloseSVG />)).not.toThrow();
  });

  it('renders as expected', () => {
    expect(shallow(<XCloseSVG />)).toMatchSnapshot();
  });
});
