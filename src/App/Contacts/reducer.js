import {SHOW_CONTACTS_ACTION, CLOSE_CONTACTS_ACTION} from "./actions";

export const contacts = (state = {isShow: false}, action) => {
    switch (action.type) {
       case SHOW_CONTACTS_ACTION:
        return {isShow: true};
        case CLOSE_CONTACTS_ACTION:
            return {isShow: false};
        default:
            return state;
    }
};