import React, {useState} from "react"
import {connect} from 'react-redux'
import {addTodo} from '../actions'

const App = (props) => {
  // const [todos, setTodo] = useState(['aaa','bbb'])
  const [word, setWord] = useState('')

  const todoList = props.task.map((todo, index) => {
    return <li key={index}>
      {todo}
      <button>削除</button>
    </li>
  })

  // const todoList = todos.map((todo, index) => {
  //   return <li key={index}>
  //     {todo}
  //     <button onClick={() => deleteTodo(index)}>削除</button>
  //     </li>
  // });

  const addTodo = event => {
    setWord(event.target.value)
  }

  const addTodo2 = () => {
    props.addTodo(word)
    setWord('')
  }

  // const addTodo2 = () => {
  //   setTodo([...todos,word])
  // }

  // const deleteTodo = (index) => {
  //   const deletetodo = todos.slice()
  //   deletetodo.splice(index,1)
  //   setTodo(deletetodo)
  // }

  return(
    <React.Fragment>
      <h1>Todoリスト</h1>
      <input type="text" value={ word } onChange={addTodo}></input><button　onClick={addTodo2}>追加</button>
      <ul>
        {todoList}
      </ul>
    </React.Fragment>
  )
}
const mapStateToProps = state => ({
  task: state.addTodo
})
const mapDispatchToProps = dispatch => ({
  addTodo:(word)=>dispatch(addTodo(word))
})

export default connect (mapStateToProps,mapDispatchToProps)(App)