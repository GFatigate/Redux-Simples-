import {createStore, combineReducers} from 'redux'

const reducers = combineReducers({
    numeros: function(state, action){
        return {
            min: 6,
            max: 20
        }
    }
})

function storeConfig(){
    return createStore(reducers)
}

export default storeConfig