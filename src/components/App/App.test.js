import React from 'react';
import { shallow } from "enzyme";
import App from './';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

describe('App', () => {
  const initialState = {
    appReducer: {}
  };
  const mockStore = configureStore();
  let store;

  beforeEach(() => {
    store = mockStore(initialState);
  });

  it('renders without crashing', () => {
    expect(shallow.bind(shallow,<Provider store={store}><App/></Provider>)).not.toThrow();
  });

  it('renders as expected', () => {
    expect(shallow(<Provider store={store}><App/></Provider>)).toMatchSnapshot();
  });
});

