import React from 'react';
import { shallow } from 'enzyme';
import LightningSVG from '.';

describe('LightningSVG', () => {
  it('renders without crashing', () => {
    expect(shallow.bind(shallow, <LightningSVG />)).not.toThrow();
  });

  it('renders as expected', () => {
    expect(shallow(<LightningSVG />)).toMatchSnapshot();
  });
});
