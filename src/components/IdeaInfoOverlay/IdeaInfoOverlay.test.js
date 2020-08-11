import React from 'react';
import { shallow, mount } from 'enzyme';
import IdeaInfoOverlay from './';

describe('IdeaInfoOverlay', () => {
  const props = {
    content: {
      id: '',
      name: '',
      description: '',
      team: {}
    }
  };

  it('renders without crashing', () => {
    expect(shallow.bind(shallow, <IdeaInfoOverlay { ...props } />)).not.toThrow();
  });

  it('renders as expected', () => {
    expect(mount(<IdeaInfoOverlay { ...props } />)).toMatchSnapshot();
  });
});
