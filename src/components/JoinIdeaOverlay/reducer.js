import { actions } from "./actions";

const initialState = {
	open: false,
	content: {
	}
};

export default (state = initialState, action) => {
	switch (action.type) {
		case actions.open:
			return {
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
				content: action.value
			};
		case actions.clean:
			return {
				...initialState,
				open: true
			};
		default:
			return state;
	}
};
