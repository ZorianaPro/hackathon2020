import React from 'react';
import { shallow, mount } from 'enzyme';
import Rules from '../Rules';

describe('Rules', () => {
  let rules;

  beforeEach(() => {
    rules = mount(<Rules />);
  });

  it('renders without crashing', () => {
    expect(shallow.bind(shallow, <Rules />)).not.toThrow();
  });

  it('renders as expected', () => {
    expect(rules).toMatchSnapshot();
  });
});
