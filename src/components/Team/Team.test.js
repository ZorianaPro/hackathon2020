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
});