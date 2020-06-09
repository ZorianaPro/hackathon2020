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
				open: false,
				content: initialState.content
			};
		default:
			return state;
	}
};
