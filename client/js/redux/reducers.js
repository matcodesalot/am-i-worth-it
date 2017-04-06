import * as actions from "./actions";

const initialState = {
    isLoggedIn: false,
    currentUser: "",
    currentPass: "",
    error: "",
};

export default function theReducer(state = initialState, action) {
    switch(action.type) {
        case actions.LOG_IN_SUCCESS:
            return Object.assign({}, state, {
                isLoggedIn: true,
                currentUser: action.payloadUser,
                currentPass: action.payloadPass,
            });

        case actions.LOG_IN_ERROR:
            return Object.assign({}, state, {
                isLoggedIn: false,
                currentUser: null,
				currentPass: null,
				error: action.payload,
            });
            
        default:
            return state;
    }
}