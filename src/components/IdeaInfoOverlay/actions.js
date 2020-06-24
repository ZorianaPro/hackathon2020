export const actions = {
	open: 'OPEN:IDEAINFO:OVERLAY',
	close: 'CLOSE:IDEAINFO:OVERLAY'
};

export const open = (content) => ({
	type: actions.open,
	value: content
});

export const close = () => ({
	type: actions.close
});

export default {
	open,
	close
};
