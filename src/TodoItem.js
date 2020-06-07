import React from 'react'
import "./TodoItem.css"

const TodoItem = (props) => {
    return (
        <div className="TodoItem">{props.value} </div>
    )
}

export {TodoItem}