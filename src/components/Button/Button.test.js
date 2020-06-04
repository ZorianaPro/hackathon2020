import React from 'react';
import { shallow, mount } from 'enzyme';
import Button from './';

describe('Button', () => {
	it('renders without crashing', () => {
		expect(shallow.bind(shallow, <Button />)).not.toThrow();
	});

	it('renders as expected', () => {
		expect(shallow(<Button />)).toMatchSnapshot();
	});

	describe('on pass title', () => {
		let button, props;

		beforeEach(() => {
			props = {
				title: 'Any title',
				target: 'Some target',
				action: 'scroll'
			};
			button = mount(<Button { ...props }/>)
		});

		it('display title', () => {
			expect(button.text()).toEqual(props.title)
		});
	});

	describe('on click', () => {
		let button, props;
		const clickHandler = jest.fn();

		beforeEach(() => {
			props = {
				title: 'Any title',
				target: 'Some target',
				action: 'scroll'
			};
			button = mount(<Button { ...props } onClick={clickHandler()}/>)
			button.simulate('click');
			button.update();
		});

		it('display title', () => {
			expect(clickHandler).toHaveBeenCalledTimes(1);
		});
	});
});
