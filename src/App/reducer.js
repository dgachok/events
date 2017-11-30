import {combineReducers} from 'redux';
import {LOAD_USERS_ACTION, LOADED_USERS_ACTION, SHOW_ERROR_ACTION, CLOSE_ERROR_ACTION} from "./actions";

const users = (state = [], action) => {
    switch (action.type) {
        case LOAD_USERS_ACTION:
            return ;
        case LOADED_USERS_ACTION:
            return action.payload.users;
        default:
            return state;
    }
};

const error = (state = '', action) => {
    switch (action.type) {
        case SHOW_ERROR_ACTION:
            return action.payload.error;
        case CLOSE_ERROR_ACTION:
            return '';
        default:
            return state;
    }};


export const reducers = combineReducers({
    users,
    error
});