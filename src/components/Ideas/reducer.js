import { actions } from "./actions";

const initialState = {
    loading: false,
    ideas: [],
    error: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actions.fetchAllIdeas:
            return {
                ...state,
                loading: true,
            };
        case actions.result:
            return {
                ...state,
                loading:false,
                ideas: action.value,
            };
        case actions.error:
            return {
                ...state,
                error: action.value,
            };
        default:
            return state;
    }
};
