import axios from 'axios';

import axiosWithAuth from '../utils/axiosAuth';

export const GET_RACE_DATA_START = 'GET_RACE_DATA_START';
export const GET_RACE_DATA_SUCCESS = 'GET_RACE_DATA_SUCCESS';
export const GET_RACE_DATA_FAILURE = 'GET_RACE_DATA_FAILURE';

export const displayRaceData = (races) => dispatch => {
    console.log(races)
    dispatch({ type: GET_RACE_DATA_START, payload: races});
    axiosWithAuth()
        .get(`http://localhost:5000/api/friends`)
        .then(res => {
            dispatch({type: GET_RACE_DATA_SUCCESS, payload: res.data})
            console.log(res)
        })
        .catch(err => console.log(err.response))
}

