import { actions } from "./actions";

const initialState = {
	open: false,
	content: {},
	response: '',
	error: ''
};

export default (state = initialState, action) => {
	switch (action.type) {
		case actions.open:
			return {
				...state,
				open: true
			};
		case actions.close:
			return {
				...state,
				open: false
			};
		case actions.submit:
			return {
				...state,
				content: action.value
			};
		case actions.response:
			return {
				...state,
				response: action.value
			};
		case actions.error:
			return {
				...state,
				error: action.value
			};
		case actions.clean:
			return {
				...state,
				content: {},
				response: '',
				error: ''
			};
		default:
			return state;
	}
};
