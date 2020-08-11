import React from 'react';
import { shallow, mount } from 'enzyme';
import Registration from './';

describe('Registration', () => {
  it('renders without crashing', () => {
    expect(shallow.bind(shallow, <Registration/>)).not.toThrow();
  });

  it('renders as expected', () => {
    expect(mount(<Registration/>)).toMatchSnapshot();
  });
});