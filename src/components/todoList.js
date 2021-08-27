import React from "react"
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo} from '../actions'

const todoSelector = state => state.addTodo.todos

export const TodoList = (props) => {
//   const [word, setWord] = useState('')

  const todos = useSelector(todoSelector)
  const dispatch = useDispatch()

  const todoList = todos.map((todo, index) => {
    return (
        <table key={index}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>タイトル</th>
                    <th>担当者名</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{todo.id}</td>
                    <td>{todo.title}</td>
                    <td>{todo.manager}</td>
                    <td><button onClick={() => dispatch(deleteTodo(index))}>削除</button></td>
                </tr>
            </tbody>
        </table>
    )
  })

//   const setTodo = event => {
//     setWord(event.target.value)
//   }

//   const addTodo2 = () => {
//     if(word === '') return
//     dispatch(addTodo(word))
//     setWord('')
//   }

  return(
    <React.Fragment>
      <h2>Todo一覧</h2>
      {/* <input type="text" value={ word } onChange={setTodo}></input><button　onClick={addTodo2}>追加</button> */}
      <ul>
        {todoList}
      </ul>
    </React.Fragment>
  )
}
