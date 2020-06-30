const focus = (input) => {
	const label = input.parentElement.querySelector('label');
	label && label.classList.add('focus');
};

const blur = (input) => {
	const label = input.parentElement.querySelector('label');
	if (input.value === '') {
		label && label.classList.remove('focus');
	}
};

export default {
	focus,
	blur
}