import axios from 'axios';

// export const LOGIN_START = 'LOGIN_START';
export const DELETE_SUCCESS = 'LOGIN_SUCCESS';
// export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const deleteUser = (id) => dispatch => {
    // dispatch({ type: LOGIN_START });
    axios
        .delete(`https://build-week-wps.herokuapp.com/users/${id}`)
        .then(res => {
            localStorage.setItem('token', res.data.token);
            dispatch({type: DELETE_SUCCESS, payload: res.data.payload})
            console.log(res)
        })
        .catch(err => {
            console.log(err.response.data);
            // dispatch({ type: LOGIN_FAILURE, payload: err.response})
        })
}
