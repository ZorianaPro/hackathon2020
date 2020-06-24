import React from 'react';
import { shallow, mount } from 'enzyme';
import JoinIdeaOverlay from './';
import configureStore from "redux-mock-store";
import { Provider } from 'react-redux';


describe('JoinIdeaOverlay', () => {
	const initialState = {
		joinIdeaOverlayReducer: {
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
		expect(shallow.bind(shallow, <Provider store={store}><JoinIdeaOverlay /></Provider>)).not.toThrow();
	});

	it('renders as expected', () => {
		expect(mount(<Provider store={store}><JoinIdeaOverlay /></Provider>)).toMatchSnapshot();
	});
});
