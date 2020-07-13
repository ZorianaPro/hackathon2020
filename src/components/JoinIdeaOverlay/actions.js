export const actions = {
	open: 'OPEN:JOINIDEA:OVERLAY',
	close: 'CLOSE:JOINIDEA:OVERLAY',
	submit: 'SUBMIT:JOINIDEA:OVERLAY',
	error: 'ERROR:JOINIDEA:OVERLAY',
	clean: 'CLEAN:JOINIDEA:OVERLAY'
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

export const error = err => ({
	type: actions.error,
	value: err
});

export const clean = () => ({
	type: actions.clean
});

export default {
	open,
	close,
	submit,
	error,
	clean
};
