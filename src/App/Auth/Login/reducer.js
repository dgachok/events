import {AUTHENTICATE_SUCCESS, LOGOUT_USER} from "./actions";

export const auth = (state = {}, action) => {
    switch (action.type) {
        case AUTHENTICATE_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return Object.assign({}, state, {
                token: action.payload.token,
                isAuthenticated: true
            });
        case LOGOUT_USER:
            localStorage.removeItem('token');
            return Object.assign({}, state, {
                token: '',
                isAuthenticated: false
            });
        default:
            return state;
    }};