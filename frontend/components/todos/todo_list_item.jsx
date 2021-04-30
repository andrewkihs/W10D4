import React from 'react'


const TodoListItem = (props) => {

    const handleDeleteClick = () => {
        props.removeTodo(props.todo.id);
    }

    return(
        <li>{props.todo.title} <button onClick={handleDeleteClick}>Delete Todo</button></li> 
    )
}

export default TodoListItem