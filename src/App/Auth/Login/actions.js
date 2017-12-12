export const AUTHENTICATE = 'AUTHENTICATE';
export const AUTHENTICATE_SUCCESS = 'AUTHENTICATE_SUCCESS';
export const LOGOUT_USER = 'LOGOUT_USER';

export const authenticate = (credentials) => ({
    type: AUTHENTICATE,
    payload: credentials
});

export const authenticateSuccess = payload => {
    return {
     type: AUTHENTICATE_SUCCESS,
     payload: payload
 };
};

export const logout = () => ({
    type: LOGOUT_USER
});
