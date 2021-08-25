import React, {Component, useState} from "react"

const App = () => {
  const [todos, setTodo] = useState(['aaa','bbb'])
  const [word, setWord] = useState('')

  const todoList = todos.map((todo, index) => {
    return <li key={index}>{todo}</li>
  });

  const addTodo = event => {
    setWord(event.target.value)
  }

  return(
    <React.Fragment>
      <h1>Todoリスト</h1>
      <input type="text" value={ word } onChange={addTodo}></input>
      <ul>
        {todoList}
      </ul>
    </React.Fragment>
  )
}


export default App;