export const AUTHENTICATE = 'AUTHENTICATE';

export const authenticate = (credentials) => ({
    type: AUTHENTICATE,
    payload: credentials
});
