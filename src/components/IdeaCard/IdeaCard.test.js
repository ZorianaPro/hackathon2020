import React from 'react';
import { shallow, mount } from 'enzyme';
import IdeaCard from './';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'
import { teams } from '../../server/mockServerData'

describe('IdeaCard', () => {
	const initialState = {
		open: false,
		ideaContent: {
			id: '',
			name: '',
			description: '',
			team: {}
		}
	};
	const mockStore = configureStore();
	let store = mockStore(initialState);

	it('renders without crashing', () => {
		expect(mount.bind(shallow, <Provider store={store}><IdeaCard /></Provider>)).not.toThrow();
	});

	it('renders as expected', () => {
		expect(mount(<Provider store={store}><IdeaCard /></Provider>)).toMatchSnapshot();
	});

	describe('given props', () => {
		let card;
		const props = {
			id: 12,
			name: 'Name',
			description: 'fddf gfdg',
			teamId: 1
		};

		beforeEach(() => {
			store = mockStore(initialState);
			card = mount(<Provider store={store}><IdeaCard { ...props }/></Provider>);
		});
		it('renders content', () => {
			expect(card.find('.IdeaCard-Info-Name').text()).toBe(props.name);
			expect(card.find('.IdeaCard-Info-Description').text()).toBe(props.description);
		});
	});
});