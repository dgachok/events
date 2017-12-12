import {LOAD_USERS_ACTION, LOADED_USERS_ACTION, SHOW_ERROR_ACTION, CLOSE_ERROR_ACTION, APP_INITIALIZED_ACTION} from "./actions";
import {auth} from "./Auth/Login/reducer";

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
            return action.payload;
        case CLOSE_ERROR_ACTION:
            return '';
        default:
            return state;
    }};

const isInitApp = (state = false, action) => {
    switch (action.type) {
        case APP_INITIALIZED_ACTION:
            return true;
        default:
            return state;
    }};

export const reducers = {
    users,
    error,
    auth,
    isInitApp
};