import axios from 'axios';

import axiosWithAuth from '../utils/axiosAuth';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const logIn = (credentials) => dispatch => {
    dispatch({ type: LOGIN_START });
    return axios
        .post(`http://localhost:5000/api/login`, credentials)
        .then(res => {
            console.log(res)
            localStorage.setItem('token', res.data.payload);
            dispatch({type: LOGIN_SUCCESS, payload: res.data.payload})
        })
        .catch(err => console.log(err.response))
}

export const GET_RACE_DATA_START = 'GET_RACE_DATA_START';
export const GET_RACE_DATA_SUCCESS = 'GET_RACE_DATA_SUCCESS';
export const GET_RACE_DATA_FAILURE = 'GET_RACE_DATA_FAILURE';

export const displayRaceData = () => dispatch => {
    dispatch({ type: GET_RACE_DATA_START });
    axiosWithAuth()
        .get(`http://localhost:5000/api/friends`)
        .then(res => {
            dispatch({type: GET_RACE_DATA_SUCCESS, payload: res.data})
            console.log(res)
        })
        .catch(err => console.log(err.response))
}

