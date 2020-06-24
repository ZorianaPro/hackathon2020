import React from 'react';
import { shallow, mount } from 'enzyme';
import IdeaInfoOverlay from './';
import configureStore from "redux-mock-store";
import { Provider } from 'react-redux';

describe('IdeaInfoOverlay', () => {
	const initialState = {
		ideaInfoOverlayReducer: {
			open: true,
			content: {
				id: '',
				name: '',
				description: '',
				team: {}
			}
		}
	};
	const mockStore = configureStore();
	let store;

	beforeEach(() => {
		store = mockStore(initialState);
	});

	it('renders without crashing', () => {
		expect(shallow.bind(shallow, <Provider store={store}><IdeaInfoOverlay/></Provider>)).not.toThrow();
	});

	it('renders as expected', () => {
		expect(mount(<Provider store={store}> <IdeaInfoOverlay /></Provider>)).toMatchSnapshot();
	});

	describe('click close button', () => {
		let overlay;

		beforeEach(() => {
			store = mockStore(initialState);
			overlay = mount(<Provider store={store}> <IdeaInfoOverlay /></Provider>);
			overlay.find('.Overlay-Close').simulate('click');
		});
		it('closes overlay', () => {
			// expect(overlay.exists('.IdeaInfoOverlay .Overlay')).toBe(false);
		});
	});
});
