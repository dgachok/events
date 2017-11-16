import {combineReducers} from 'redux';

const users = (state = [], action) => {
    switch (action.type) {
        case 'LOAD_USER_ACTION':
            return;
        case 'LOADED_USERS_ACTION':
            return action.payload.users;
        default:
            return state;
    }
};


export const reducer = combineReducers({
    users
});