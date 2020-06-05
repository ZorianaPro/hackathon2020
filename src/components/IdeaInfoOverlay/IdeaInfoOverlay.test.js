import React from 'react';
import { shallow, mount } from 'enzyme';
import IdeaInfoOverlay from './';

describe('IdeaInfoOverlay', () => {
	it('renders without crashing', () => {
		expect(shallow.bind(shallow, <IdeaInfoOverlay />)).not.toThrow();
	});

	it('renders as expected', () => {
		expect(shallow(<IdeaInfoOverlay />)).toMatchSnapshot();
	});

	describe('click close button', () => {
		let overlay;

		beforeEach(() => {
			overlay = mount(<IdeaInfoOverlay/>);
			overlay.find('.IdeaInfoOverlay-Close').simulate('click');
			overlay.update();
		});
		it('closes overlay', () => {
			expect(overlay.exists('.IdeaInfoOverlay')).toBe(false);
		});
	});
});
