import React from 'react';
import { shallow, mount } from 'enzyme';
import JoinIdeaOverlay from '../';

describe('JoinIdeaOverlay', () => {

  it('renders without crashing', () => {
    expect(shallow.bind(shallow, <JoinIdeaOverlay />)).not.toThrow();
  });

  it('renders as expected', () => {
    expect(mount(<JoinIdeaOverlay />)).toMatchSnapshot();
  });
});
