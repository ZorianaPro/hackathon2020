import React from 'react';
import { shallow } from 'enzyme';
import DateSVG from './';

describe('DateSVG', () => {
  it('renders without crashing', () => {
    expect(shallow.bind(shallow, <DateSVG />)).not.toThrow();
  });

  it('renders as expected', () => {
    expect(shallow(<DateSVG />)).toMatchSnapshot();
  });
});
