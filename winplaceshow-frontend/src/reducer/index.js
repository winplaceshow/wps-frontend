import { 
    SIGNUP_START, SIGNUP_SUCCESS, SIGNUP_FAILURE,
    LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE,
    GET_RACE_DATA_START, GET_RACE_DATA_SUCCESS, GET_RACE_DATA_FAILURE,
    GET_PAST_RACE_DATA_SUCCESS,
    GET_HORSES_DATA_SUCCESS,
} from '../actions/index';

// import {  
// } from '../actions/index';

// import { 
// } from '../actions/index';

import { 
    RACE_SEARCH_START,
    RACE_SEARCH_SUCCESS,
    RACE_SEARCH_FAILURE
} from '../actions/index';

const initialstate = {
    futureRaceArray: [],
    pastRaceArray: [],
    horses: [],
    loggingIn: false,
    error: '',
    signupSuccessMessage: ''
}

const reducer = (state = initialstate, action) => {
    switch(action.type) {
        case LOGIN_START:
            return {
                ...state,
                loggingIn: true,
                error: ''
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loggingIn: false,
                error: ''
            }
        case LOGIN_FAILURE:
            console.log(action.payload.status)
            return {
                ...state,
                loggingIn: false,
                error: action.payload.data.error,
                errorStatusCode: action.payload.status
            }
        case SIGNUP_START:
            return {
                ...state,
                signingup: true,
                error: '',
                signupSuccessMessage: ''
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                signingup: false,
                signupSuccessMessage: "Success!!! Now you can go to log-in.",
                error: '',
            }
        case SIGNUP_FAILURE:
            return {
                ...state,
                signingup: false,
                errorStatusCode: action.payload.status,
                signupSuccessMessage: ''
            }
        // case RACE_SEARCH_SUCCESS:
        //     return {
        //         ...state,
        //         races: action.payload
        //     }
        case GET_RACE_DATA_START:
            return {
                ...state,
                races: action.payload
            }
        case GET_RACE_DATA_SUCCESS:
            return {
                ...state,
                futureRaceArray: action.payload
            }
        case GET_RACE_DATA_FAILURE:
            return {
                
            }
        case GET_PAST_RACE_DATA_SUCCESS:
            return {
                ...state,
                pastRaceArray: action.payload
            }
        case GET_HORSES_DATA_SUCCESS:
            return {
                ...state,
                horses: action.payload
            }
        default:
            return state
    }
}

export default reducer;