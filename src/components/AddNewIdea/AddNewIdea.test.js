import React from 'react';
import { shallow, mount } from 'enzyme';
import AddNewIdea from './';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

describe('AddNewIdea', () => {
  const initialState = {
    addNewIdeaReducer: {
      open: true,
      content: {
        id: ''
      }
    }
  };
  const mockStore = configureStore();
  let store;
  beforeEach(() => {
    store = mockStore(initialState);
  });

  it('renders without crashing', () => {
    expect(shallow.bind(shallow, <Provider store={store}><AddNewIdea /></Provider>)).not.toThrow();
  });

  it('renders as expected', () => {
    expect(mount(<Provider store={store}><AddNewIdea /></Provider>)).toMatchSnapshot();
  });
});
