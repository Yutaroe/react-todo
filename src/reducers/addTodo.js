import {ADDTODO} from '../actions'
import {DELETETODO} from '../actions'

const initialState = []

const addList = (state = initialState, action) => {
    switch(action.type){
        case ADDTODO:
            return [...state,action.addtodo]
        case DELETETODO:
            const deleteTodo = [...state]
            deleteTodo.splice(action.index,1)
            return deleteTodo
        default:
            return state
    }
}

export default addList