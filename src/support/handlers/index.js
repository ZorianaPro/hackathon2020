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

const scrollToCenter = (el) => {
	el.scrollIntoView(
		{
			behavior: "smooth",
			block: "center",
			inline: "nearest"
		})
};

export const scrollElToCenter = (el) => {
	const headerHeight = document.querySelector('.Header').offsetHeight;

	const elementPosition = el.offsetTop - headerHeight - 10;
	window.scroll({
		top: elementPosition,
		left: 0,
		behavior: "smooth"
	});
};

export default {
	focus,
	blur
}