import React, { useState } from 'react'
import TodoList from './TodoList'


function App() {
  // for todos, the default state will be an empty array. then use obj destructuring
  const [todos, setTodos] = useState([])
  // you can't put 2 html or jsx elements next to eachother in a return. 
  // The return can only return one thing. Any Js function returns only one thing.
  // Wrap it inside an empty element(fragment) that allows us to return one thing
  return (
    
   <>
    <TodoList />
    <input type = 'text' />
    <button>Add Todo</button>
    <button>Clear Completed</button>
    <div>0 left to do</div>
    </>
  )
}

export default App;
