import axiosWithAuth from '../utils/axiosAuth';
import { horses } from '../objects';

// export const GET_RACE_DATA_START = 'GET_RACE_DATA_START';
export const GET_HORSES_DATA_SUCCESS = 'GET_HORSES_DATA_SUCCESS';
// export const GET_RACE_DATA_FAILURE = 'GET_RACE_DATA_FAILURE';

export const horsesData = (asd) => dispatch => {
    // dispatch({ type: GET_RACE_DATA_START, payload: races});
    // axiosWithAuth()
    //     .get(`http://winplaceshow.herokuapp.com/json/previous/triplecrown/`)
    //     .then(res => {
    //         console.log(res)
    //         // const arr = []
    //         // for(let i=0; i<5; i++) {
    //         //     if(res.data[i].name.toLowerCase() == date.toLocaleLowerCase() && `${res.data[i].age}`.toLocaleLowerCase() == city.toLocaleLowerCase()) {
    //         //         console.log(res.data[i].age)
    //         //         arr.push(res.data[i])
    //         //     }
    //         // }
    //         // console.log(arr)
    //         dispatch({type: GET_RACE_DATA_SUCCESS, payload: res.data})
    //     })
    //     .catch(err => console.log(err))
    dispatch({type: GET_HORSES_DATA_SUCCESS, payload: horses})
    // console.log(horses)
}

