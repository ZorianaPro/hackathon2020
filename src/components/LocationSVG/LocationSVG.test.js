import React from 'react';
import { shallow } from 'enzyme';
import LocationSVG from './';

describe('LocationSVG', () => {
  it('renders without crashing', () => {
    expect(shallow.bind(shallow, <LocationSVG />)).not.toThrow();
  });

  it('renders as expected', () => {
    expect(shallow(<LocationSVG />)).toMatchSnapshot();
  });
});
