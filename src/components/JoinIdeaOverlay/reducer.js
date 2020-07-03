import { actions } from "./actions";

const initialState = {
	open: false,
	content: {},
	error: '',
	userInfo: {}
};

export default (state = initialState, action) => {
	switch (action.type) {
		case actions.open:
			return {
				...state,
				open: true,
				content: action.value
			};
		case actions.close:
			return {
				...state,
				open: false
			};
		case actions.submit:
			return {
				...state,
				userInfo: action.value
			};
		case actions.error:
			return {
				...state,
				error: action.value
			};
		default:
			return state;
	}
};
