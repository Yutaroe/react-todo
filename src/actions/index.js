export const ADDTODO = 'addTodo'

export const addTodo = (task) =>({
    type: ADDTODO,
    addtodo: {task:task}
    })