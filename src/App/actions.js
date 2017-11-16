export const LOAD_USERS_ACTION = 'LOAD_USERS_ACTION';
export const LOADED_USERS_ACTION = 'LOADED_USERS_ACTION';

export const loadUsers = () => ({
    type: LOAD_USERS_ACTION
});

export const loadedUsers = (users) => ({
    type: LOADED_USERS_ACTION,
    payload: users
});

