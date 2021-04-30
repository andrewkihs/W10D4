import React from 'react';


class TodoListItem extends React.Component {
    constructor(props){
        super(props);
        let toggleBtnText = ''
        if (this.props.todo.done){
            toggleBtnText = 'Undo'
        } else {
            toggleBtnText = 'Done'
        }
        this.state = {
            done: toggleBtnText
        }

        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.handleStatusToggle = this.handleStatusToggle.bind(this);
    }
    handleDeleteClick() {
        this.props.removeTodo(this.props.todo.id);
        console.log("delete")
    }

    handleStatusToggle(){
        let newTodo = Object.assign({}, this.props.todo);
        newTodo.done = !this.props.todo.done;
        this.props.receiveTodo(newTodo);
        if (this.state.done == 'Undo'){
            this.setState({done: 'Done'})
        } else {
            this.setState({done: 'Undo'})
        }
    }

    render () {
     
        return(
            <li>
                {this.props.todo.title} {this.props.todo.status}
                <button onClick={this.handleStatusToggle}>{this.state.done}</button>
                <button onClick={this.handleDeleteClick}>Delete Todo</button>
            </li> 
        )
    }
}

export default TodoListItem