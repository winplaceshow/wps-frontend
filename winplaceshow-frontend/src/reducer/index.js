import { LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE 
} from '../actions/index';

import { 
    GET_RACE_DATA_START, 
    GET_RACE_DATA_SUCCESS, 
    GET_RACE_DATA_FAILURE 
} from '../actions/index';


const initialstate = {
    races: []
}

const reducer = (state = initialstate, action) => {
    switch(action.type) {
        case GET_RACE_DATA_START:
            return {
                ...state,
                races: action.payload
            }
        case GET_RACE_DATA_SUCCESS:
            return {
                ...state,
                races: action.payload
            }
        case GET_RACE_DATA_FAILURE:
            return {
                
            }
        default:
            return state
    }
}

export default reducer;