import React from 'react'
import TodoInput from './TodoInput'
import TodoList from "./TodoList"
import { useState } from "react"

const TodoApp = () => {
  let [todoArr, setTodoArr] = useState([])
  return (
    <div>
      <h1>
        
        TodoApp
        </h1>  
<TodoInput todoArr={todoArr} setTodoArr={setTodoArr}/>
<TodoList any={todoArr} setTodoArr={setTodoArr}/>
      
    </div>
  )
}

export default TodoApp
