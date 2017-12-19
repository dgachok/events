export const LOAD_USERS_ACTION = 'LOAD_USERS_ACTION';
export const LOADED_USERS_ACTION = 'LOADED_USERS_ACTION';
export const LOAD_USER_ACTION = 'LOAD_USER_ACTION';
export const LOADED_USER_ACTION = 'LOADED_USER_ACTION';
export const SHOW_ERROR_ACTION = 'SHOW_ERROR_ACTION';
export const CLOSE_ERROR_ACTION = 'CLOSE_ERROR_ACTION';
export const APP_INITIALIZE_ACTION = 'APP_INITIALIZE_ACTION';
export const APP_INITIALIZED_ACTION = 'APP_INITIALIZED_ACTION';

export const loadUsers = () => ({
    type: LOAD_USERS_ACTION
});

export const loadedUsers = (users) => ({
    type: LOADED_USERS_ACTION,
    payload: users
});

export const loadUser = () => ({
    type: LOAD_USER_ACTION
});

export const loadedUser = (user) => ({
    type: LOADED_USER_ACTION,
    payload: user
});

export const showError = (error) => {
    return ({
        type: SHOW_ERROR_ACTION,
        payload: error
    });
};

export const closeError = () => ({
    type: CLOSE_ERROR_ACTION
});

export const initialize = (token) => ({
    type: APP_INITIALIZE_ACTION,
    payload: {token: token}
});

export const initialized = () => ({
    type: APP_INITIALIZED_ACTION
});