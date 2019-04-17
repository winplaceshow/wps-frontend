import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const logIn = (credentials) => dispatch => {
    dispatch({ type: LOGIN_START });
    return axios
        .post(`https://build-week-wps.herokuapp.com/auth/login`, credentials)
        .then(res => {
            localStorage.setItem('token', res.data.token);
            dispatch({type: LOGIN_SUCCESS, payload: res.data.payload})
            console.log(res)
        })
        .catch(err => {
            console.log(err.response.data);
            dispatch({ type: LOGIN_FAILURE, payload: err.response})
        })
}
