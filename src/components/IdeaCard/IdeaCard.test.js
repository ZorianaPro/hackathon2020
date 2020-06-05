import React from 'react';
import { shallow, mount } from 'enzyme';
import IdeaCard from './';
import { teams } from '../../server/mockServerData'

describe('IdeaCard', () => {
	it('renders without crashing', () => {
		expect(shallow.bind(shallow, <IdeaCard/>)).not.toThrow();
	});

	it('renders as expected', () => {
		expect(shallow(<IdeaCard/>)).toMatchSnapshot();
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
			card = mount(<IdeaCard { ...props }/>);
		});
		it('renders content', () => {
			expect(card.find('.IdeaCard-Info-Name').text()).toBe(props.name);
			expect(card.find('.IdeaCard-Info-Description').text()).toBe(props.description);
		});
	});
});