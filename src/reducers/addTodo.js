import {ADDTODO} from '../actions'

const initialState = []

const addList = (state = initialState, action) => {
    switch(action.type){
        case ADDTODO:
            console.log(action)
            return [...state,action.addtodo];
        default:
            return state
    }
}

export default addList