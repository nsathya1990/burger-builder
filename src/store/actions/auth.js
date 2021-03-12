import axios from 'axios';

import * as actionTypes from './actionTypes';

const API_KEY = 'AIzaSyDlhaWxOWa9MxGisVrnLC8Dv92F8wZIcMw';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START,
    };
};

export const authSuccess = (authData) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        authData,
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error,
    };
};

export const auth = (email, password, isSignup) => {
    return (dispatch) => {
        // authenticate user logic
        dispatch(authStart());
        const authData = {
            email,
            password,
            returnSecureToken: true,
        };
        let url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;
        if (!isSignup) {
            url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;
        }
        axios
            .post(url, authData)
            .then((response) => {
                console.log(response);
                dispatch(authSuccess(response.data));
            })
            .catch((err) => {
                console.log(err);
                dispatch(authFail(err));
            });
    };
};
