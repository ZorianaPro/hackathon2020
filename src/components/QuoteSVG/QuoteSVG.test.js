import React from 'react';
import { shallow } from 'enzyme';
import QuoteSVG from './';

describe('QuoteSVG', () => {
  it('renders without crashing', () => {
    expect(shallow.bind(shallow, <QuoteSVG />)).not.toThrow();
  });

  it('renders as expected', () => {
    expect(shallow(<QuoteSVG />)).toMatchSnapshot();
  });
});
