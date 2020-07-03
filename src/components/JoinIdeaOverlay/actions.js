export const actions = {
	open: 'OPEN:JOINIDEA:OVERLAY',
	close: 'CLOSE:JOINIDEA:OVERLAY',
	submit: 'SUBMIT:JOINIDEA:OVERLAY',
	error: 'ERROR:JOINIDEA:OVERLAY'
};

export const open = (content = {}) => ({
	type: actions.open,
	value: content
});

export const close = () => ({
	type: actions.close,
});

export const submit = content => ({
	type: actions.submit,
	value: content
});

export const error = content => ({
	type: actions.error,
	value: content
});

export default {
	open,
	close,
	submit,
	error
};
