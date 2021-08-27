import React, {useState} from "react"
import { useDispatch, useSelector } from 'react-redux'
import {addTodo} from '../actions'
import {deleteTodo} from '../actions'

const todoSelector = state => state.addTodo

const App = (props) => {
  const [word, setWord] = useState('')

  const todo = useSelector(todoSelector)
  const dispatch = useDispatch()

  const todoList = todo.map((todo, index) => {
    return <li key={index}>
      {todo}
      <button onClick={() => dispatch(deleteTodo(index))}>削除</button>
    </li>
  })

  const setTodo = event => {
    setWord(event.target.value)
  }

  const addTodo2 = () => {
    dispatch(addTodo(word))
    setWord('')
  }

  return(
    <React.Fragment>
      <h1>Todoリスト</h1>
      <input type="text" value={ word } onChange={setTodo}></input><button　onClick={addTodo2}>追加</button>
      <ul>
        {todoList}
      </ul>
    </React.Fragment>
  )
}

export default App