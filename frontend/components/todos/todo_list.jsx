import React from 'react';
import TodoListItem from './todo_list_item'
import TodoForm from './todo_form'

const TodoList = (props) => {
    return (
        <div>
            <h1>All Todos</h1>
            <ul>
                {
                    props.todos.map(todo => {
                        return (
                            <React.Fragment key={todo.id}>
                                <TodoListItem todo={todo} />
                            </React.Fragment>
                        )
                    })
                }
            </ul>
            <TodoForm receiveTodo={props.receiveTodo}/>
        </div>
    )
}

export default TodoList