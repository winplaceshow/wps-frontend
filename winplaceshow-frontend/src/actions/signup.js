import axios from 'axios';

export const SIGNUP_START = 'SIGNUP_START';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

export const signup = (credentials) => dispatch => {
    dispatch({ type: SIGNUP_START });
    return axios
        .post(`https://build-week-wps.herokuapp.com/signup`, credentials)
        .then(res => {
            dispatch({type: SIGNUP_SUCCESS})
            console.log(res)
        })
        .catch(err => {
            dispatch({ type: SIGNUP_FAILURE})
            console.log(err);
        })
}
