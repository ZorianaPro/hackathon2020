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

export const scrollElToCenter = () => {
	const el = document.querySelector('.Overlay-Box')
	if (el) {
		const elementPosition = el.offsetTop - 40;
		window.scroll({
			top: elementPosition,
			behavior: "smooth"
		});
	}
};

export default {
	focus,
	blur,
	scrollElToCenter
}