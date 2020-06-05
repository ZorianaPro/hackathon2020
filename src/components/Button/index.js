import React from 'react';
import './Button.css'

const Button = ({
	title,
	action = 'overlay',
	target
}) => {

	const clickHandler = () => {
		const targetEl = document.querySelector(`.${target}`);
		if (targetEl) {
			if (action === 'scroll') {
				targetEl.scrollIntoView({ behavior: 'smooth', block: 'start'});
			}
			if (action === 'overlay') {
			//	open target overlay
			}
		}
	};

	return (
		<div className="Button"
		     onClick={() => clickHandler()}>
			{title}
		</div>
	)
};

export default Button;