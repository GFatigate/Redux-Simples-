import {NUM_MIN_ALTERADO, NUM_MAX_ALTERADO} from '../actions/actionType'

const InitialState = {
    min: 6,
    max: 20
}

export default function(state = InitialState, action){
    switch(action.type){
        case NUM_MIN_ALTERADO: 
            return{
                ...state,
                min: action.payload
            }
        case NUM_MAX_ALTERADO: 
            return{
                ...state,
                max: action.payload
            }
        default:
            return state
    }
}