import {combineReducers} from 'redux';

const user = (state = {}, action) => {
    switch (action.type) {
        case 'LOAD_USER_ACTION':
            return true;
        default:
            return state;
    }
};


export const reducer = combineReducers({
    user
});