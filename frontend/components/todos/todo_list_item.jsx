import React from 'react';
import TodoDetailView from './todo_detail_view';


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
            done: toggleBtnText,
            detail: false
        }

        this.handleStatusToggle = this.handleStatusToggle.bind(this);
        this.handleDetailViewToggle = this.handleDetailViewToggle(this);
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

    handleDetailViewToggle(){
        const nextDetailStatus = !this.state.detail
        this.setState({detail: true})
    }

    render () {
        
        if (this.state.detail){
                return(
                <li>
                    {this.props.todo.title} {this.props.todo.status}
                    <button onClick={this.handleStatusToggle}>{this.state.done}</button>
                    <button onClick={this.handleDetailViewToggle}>Show details </button>
                    <TodoDetailView todo={this.props.todo}/>
                </li> 
            )
        } else{
            return(
                <li>
                    {this.props.todo.title} {this.props.todo.status}
                    <button onClick={this.handleStatusToggle}>{this.state.done}</button>
                    <button onClick={this.handleDetailViewToggle}>Show details </button>
                    
                </li> 
            )
        }
    }
}

export default TodoListItem