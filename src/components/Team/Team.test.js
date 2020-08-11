import React from 'react';
import { shallow, mount } from 'enzyme';
import Team from './';

describe('Team', () => {
  it('renders without crashing', () => {
    expect(shallow.bind(shallow, <Team/>)).not.toThrow();
  });

  it('renders as expected', () => {
    expect(shallow(<Team/>)).toMatchSnapshot();
  });

  describe('no members yet', () => {
    let team;

    beforeEach(() => {
      team = mount(<Team/>);
    });
    it('renders default message', () => {
      expect(team.find('.Team--empty').text()).toBe('No members yet');
    });
  });

  describe('has members', () => {
    let team;
    const props = {
      team: [
        {
          id: 'any',
          firstName: 'Zoriana',
          lastName: 'Lesyl',
          email: 'some@random',
          position: 'Manager'
        }, {
          id: 'any',
          firstName: 'Zoriana',
          lastName: 'Lesyl',
          email: 'some@random',
          position: 'Manager'
        }
      ]
    };

    beforeEach(() => {
      team = mount(<Team { ...props }/>);
    });
    it('renders all team members', () => {
      expect(team.find('.Team-Members').children().length).toBe(2);
    });
  });
});