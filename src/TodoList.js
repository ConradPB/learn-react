import React from 'react'

export default function TodoList({ todos }) {
    return (
        // the curly brackets say that this is js code

        <div>
            {todos.length}
        </div>
    )
}
