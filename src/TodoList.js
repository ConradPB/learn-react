import React from 'react'
import Todo from './Todo'

export default function TodoList({ todos }) {
    return (
       todos.map(todo => {
        // The unique key allows react to only rerender or change components that actually
        // change inside the array instead of rerendering all of them every time.
        //The key is for efficiency purposes
        return <Todo key={todo.id} todo={todo} />
       })
    )
}
