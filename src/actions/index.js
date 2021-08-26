export const ADDTODO = 'addTodo'
export const DELETETODO = 'deleteTodo'

export const addTodo = (task) =>({
    type: ADDTODO,
    addtodo: task
    })

export const deleteTodo = (index) => ({
    type: DELETETODO,
    index: index
})