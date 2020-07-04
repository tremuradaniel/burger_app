import * as actionTypes from './actionTypes';
import axios from './../../axios-orders';
export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const logout = () => {
    return {
        type: actionTypes.AUTH_LOGOUT
    }
};

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000);
    };
};

export const auth = (email, password, isSignup) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        let url = process.env.REACT_APP_SIGN_UP_URL + process.env.REACT_APP_WEB_API_KEY
        if (!isSignup) {
            url = process.env.REACT_APP_LOGIN_URL
        }
        axios.post(url, authData)
            .then(response => {
                if (process.env.REACT_APP_ENV === 'dev') { console.log(response); }
                dispatch(authSuccess(response.data.idToken, response.data.localId));
                dispatch(checkAuthTimeout(response.data.expiresIn))
            })
            .catch(err => {
                if (process.env.REACT_APP_ENV === 'dev') { console.log(err.response.data.error.message); }
                dispatch(authFail(err.response.data.error.message))
            })
    };
};

export const setAuthRedirectPath = (path) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path
    }
}
