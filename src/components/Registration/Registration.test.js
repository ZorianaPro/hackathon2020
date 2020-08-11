import React from 'react';
import { shallow, mount } from 'enzyme';
import Registration from './';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('Registration', () => {
  const initialState = {};
  const mockStore = configureStore();
  const store = mockStore(initialState);

  it('renders without crashing', () => {
    expect(shallow.bind(shallow, <Provider store={store}><Registration/></Provider>)).not.toThrow();
  });

  it('renders as expected', () => {
    expect(mount(<Provider store={store}><Registration/></Provider>)).toMatchSnapshot();
  });
});