import React from 'react';
import { shallow, mount } from 'enzyme';
import AddNewIdea from './';

describe('AddNewIdea', () => {

  it('renders without crashing', () => {
    expect(shallow.bind(shallow, <AddNewIdea />)).not.toThrow();
  });

  it('renders as expected', () => {
    expect(mount(<AddNewIdea />)).toMatchSnapshot();
  });
});
