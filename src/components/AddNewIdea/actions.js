export const actions = {
	open: 'OPEN:ADDNEWIDEA:OVERLAY',
	close: 'CLOSE:ADDNEWIDEA:OVERLAY',
	submit: 'SUBMIT:ADDNEWIDEA:OVERLAY'
};

export const open = (content = {}) => ({
	type: actions.open
});

export const close = () => ({
	type: actions.close,
});

export const submit = content => ({
	type: actions.submit,
	value: content
});

export default {
	open,
	close,
	submit
};
