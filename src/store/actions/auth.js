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
            })
            .catch(err => {
                if (process.env.REACT_APP_ENV === 'dev') { console.log(err); }
                dispatch(authFail(err))
            })
    };
};