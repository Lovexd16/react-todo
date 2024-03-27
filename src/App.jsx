import { useState } from 'react'
import ShowTodo from './ShowTodo'
import AddTodoForm from './AddTodoForm'

import './App.css'

function App() {

  const [todos, setTodos] = useState([]) //states sätts ALLTID till const

    const updateTodos = (getTodo) => {
      console.log("Callback in App", getTodo);
      setTodos([...todos, {id: todos.length + 1, todo: getTodo}])
    }

    const doneTodo = (getId) => {
      setTimeout(() => {
        setTodos(todos.filter(todo => todo.id !== getId));
      }, 500);
    }

  return (
    <div>
      <h1>Todo</h1>
      <AddTodoForm updateTodos={updateTodos} />
      {todos.map(todo => (
        <ShowTodo key={todo.id} todo={todo} doneTodo={doneTodo} />
      ))}
    </div>
  )
}

export default App
