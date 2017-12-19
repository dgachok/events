import {SHOW_CONTACTS_ACTION, CLOSE_CONTACTS_ACTION, SEND_MESSAGE_SUCCESS_ACTION} from "./actions";

export const contacts = (state = {isShow: false, isSend: false}, action) => {
    switch (action.type) {
        case SHOW_CONTACTS_ACTION:
            return {isShow: true, isSend: false};
        case CLOSE_CONTACTS_ACTION:
            return {isShow: false, isSend: false};
        case SEND_MESSAGE_SUCCESS_ACTION:
            return {isShow: true, isSend: true};
        default:
            return state;
    }
};