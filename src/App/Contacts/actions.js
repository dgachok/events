export const SHOW_CONTACTS_ACTION = "SHOW_CONTACTS_ACTION";
export const SEND_MESSAGE_CONTACTS_ACTION = "SEND_MESSAGE_CONTACTS_ACTION";
export const SEND_MESSAGE_SUCCESS_ACTION = "SEND_MESSAGE_SUCCESS_ACTION";
export const CLOSE_CONTACTS_ACTION = "CLOSE_CONTACTS_ACTION";

export const showContacts = () => ({
    type: SHOW_CONTACTS_ACTION
});

export const closeContacts = () => ({
    type: CLOSE_CONTACTS_ACTION
});

export const sendMessageContacts = (message) => ({
    type: SEND_MESSAGE_CONTACTS_ACTION,
    payload: message
});

export const sendMessageSuccessContacts = () => ({
    type: SEND_MESSAGE_SUCCESS_ACTION
});
