import { actions } from "./actions";

const initialState = {
	open: false,
	ideaContent: {
		id: '',
		name: '',
		description: '',
		team: {}
	}
};

export default (state = initialState, action) => {
	switch (action.type) {
		case actions.open:
			return {
				open: true,
				ideaContent: action.value
			};
		case actions.close:
			return {
				open: false,
				ideaContent: initialState.ideaContent
			};
		default:
			return state;
	}
};
