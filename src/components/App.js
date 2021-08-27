import React from "react"
import {TodoList} from  './todoList'
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'

const App = () => {
  return(
    <Router>
      <div>
        <h1>Todoリスト</h1>
        <nav>
          <ul>
            <li>
              <Link to='/'>Todo一覧</Link>
            </li>
          </ul>
        </nav>
      </div>

      <Switch>
        <Route path='/' component={TodoList} />
      </Switch>
    </Router>
  )
}

export default App