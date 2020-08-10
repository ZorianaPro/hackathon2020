import React from 'react';
import { shallow, mount } from 'enzyme';
import IdeaCard from './';

describe('IdeaCard', () => {
  const props = {
    idea: {
      id: 12,
      name: 'Name',
      description: 'fddf gfdg',
      teamId: 1
    }
  };

  it('renders without crashing', () => {
    expect(mount.bind(shallow, <IdeaCard { ...props } />)).not.toThrow();
  });

  it('renders as expected', () => {
    expect(mount(<IdeaCard { ...props } />)).toMatchSnapshot();
  });

  describe('given props', () => {
    let card;
    const props = {
      idea: {
        id: 12,
        name: 'Name',
        description: 'fddf gfdg',
        teamId: 1
      }
    };

    beforeEach(() => {
      card = mount(<IdeaCard { ...props }/>);
    });
    it('renders name', () => {
      expect(card.find('.IdeaCard-Info-Name').text()).toBe(props.idea.name);
    });
    it('renders description', () => {
      expect(card.find('.IdeaCard-Info-Description').text()).toBe(props.idea.description);
    });
  });
});