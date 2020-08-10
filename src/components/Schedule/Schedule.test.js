import React from 'react';
import { shallow, mount } from 'enzyme';
import Schedule from '../Schedule';

describe('Schedule', () => {
  let schedule;

  beforeEach(() => {
    schedule = mount(<Schedule />);
  });

  it('renders without crashing', () => {
    expect(shallow.bind(shallow, <Schedule />)).not.toThrow();
  });

  it('renders as expected', () => {
    expect(schedule).toMatchSnapshot();
  });
});