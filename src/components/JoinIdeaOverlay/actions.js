export const actions = {
	open: 'OPEN:JOINIDEA:OVERLAY',
	close: 'CLOSE:JOINIDEA:OVERLAY'
};

export const open = (content = {}) => ({
	type: actions.open,
	value: content
});

export const close = () => ({
	type: actions.close,
});

export default {
	open,
	close
};
