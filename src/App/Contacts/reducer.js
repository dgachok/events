const contacts = (state = {isShow: false}, action) => {
    switch (action.type) {
       case SHOW_CONTACTS_ACTION:
        return Object.assign(action.payload.response, {isShow: true});
        case CLOSE_CONTACTS_ACTION:
            return {isShow: false};
        default:
            return state;
    }
};