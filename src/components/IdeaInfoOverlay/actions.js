export const actions = {
	open: 'OPEN:OVERLAY',
	close: 'CLOSE:OVERLAY'
};

export const open = (ideaInfo) => ({
	type: actions.open,
	value: ideaInfo
});

export const close = () => ({
	type: actions.close,
	value: false
});

export default {
	open,
	close
};
