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
                
            }
        case GET_RACE_DATA_SUCCESS:
            return {
                
            }
        case GET_RACE_DATA_FAILURE:
            return {
                
            }
        default:
            return state
    }
}

export default reducer;