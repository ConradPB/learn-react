import React, { useState, useRef } from 'react'
import TodoList from './TodoList'

//The uuid library allows us to create completely ramdom
import uuid from 'uuid'


function App() {
  // for todos, the default state will be an empty array. then use obj destructuring
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') return
    console.log(name)
    setTodos(prevTodos => {
      return [...prevTodos, { id: 1, name: name, complete: false }]
    })

    //clears out input when u add something
    todoNameRef.current.value = null
  }

  // you can't put 2 html or jsx elements next to eachother in a return. 
  // The return can only return one thing. Any Js function returns only one thing.
  // Wrap it inside an empty element(fragment) that allows us to return one thing
  return (
    
   <>
    <TodoList todos={todos} />
    <input type = 'text' ref={todoNameRef} />
    <button onClick={handleAddTodo}>Add Todo</button>
    <button>Clear Completed</button>
    <div>0 left to do</div>
    </>
  )
}

export default App;
