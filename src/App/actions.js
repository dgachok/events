export const LOAD_USERS_ACTION = 'LOAD_USERS_ACTION';
export const LOADED_USERS_ACTION = 'LOADED_USERS_ACTION';
export const SHOW_ERROR_ACTION = 'SHOW_ERROR_ACTION';
export const CLOSE_ERROR_ACTION = 'CLOSE_ERROR_ACTION';

export const loadUsers = () => ({
    type: LOAD_USERS_ACTION
});

export const loadedUsers = (users) => ({
    type: LOADED_USERS_ACTION,
    payload: users
});

export const showError = (error) => ({
    type: SHOW_ERROR_ACTION,
    payload: error,
    error: true
});

export const closeError = () => ({
    type: CLOSE_ERROR_ACTION
});
