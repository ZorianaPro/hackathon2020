export const actions = {
	open: 'OPEN:ADDNEWIDEA:OVERLAY',
	close: 'CLOSE:ADDNEWIDEA:OVERLAY',
	submit: 'SUBMIT:ADDNEWIDEA:OVERLAY',
	response: 'RESPONCE:ADDNEWIDEA:OVERLAY',
	error: 'ERROR:ADDNEWIDEA:OVERLAY',
	clean:  'CLEAN:ADDNEWIDEA:OVERLAY',
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

export const response = (response) => ({
	type: actions.response,
	value: response
});

export const error = (err) => ({
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
	response,
	error,
	clean
};
