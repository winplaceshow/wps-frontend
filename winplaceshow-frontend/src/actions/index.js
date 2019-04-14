import axios from 'axios';

export const GET_RACE_DATA_START = 'GET_RACE_DATA_START';
export const GET_RACE_DATA_SUCCESS = 'GET_RACE_DATA_SUCCESS';
export const GET_RACE_DATA_FAILURE = 'GET_RACE_DATA_FAILURE';

export const displayRaceData = () => dispatch => {
    dispatch({ type: GET_RACE_DATA_START });
    axios
        .get(`http://localhost:5000/api/friends`)
        .then(res => console.log(res))
        .catch(err => console.log(err.response))
}