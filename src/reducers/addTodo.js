import {ADDTODO} from '../actions'
import {DELETETODO} from '../actions'

const initialState = {
    todos:[
        {id:1, title:'todo作成', manager:'原田'}
    ]
}

const addList = (state = initialState, action) => {
    switch(action.type){
        case ADDTODO:
            return [...state,action.addtodo]
        case DELETETODO:
            const deleteTodo = state.todos.slice()
            console.log(deleteTodo)
            deleteTodo.splice(action.index,1)
            return {todos:deleteTodo}
        default:
            return state
    }
}

export default addList