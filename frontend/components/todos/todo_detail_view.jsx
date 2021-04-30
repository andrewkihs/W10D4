import React from 'react';


class TodoDetailView extends React.Component {
  constructor(props){
    super(props);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }


  handleDeleteClick() {
    this.props.removeTodo(this.props.todo.id);
    console.log("delete")
  }

  render() {

    return (
      <div>
      <h1> {this.props.todo.title}</h1>
      <p>{this.props.todo.body}</p>
      <button onClick={this.handleDeleteClick}>Delete Todo</button>
      </div>
    )
  }
}

export default TodoDetailView