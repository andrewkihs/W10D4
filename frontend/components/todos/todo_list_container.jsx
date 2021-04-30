import { connect } from 'react-redux';
import TodoList  from './todo_list'
import  * as TodoActions from '../../actions/todo_actions';
import { allTodos } from '../../reducers/selectors'
import React from 'react'

const mSTP = (state) => {
  return {
    todos: allTodos(state)
  }
}

const mDTP = (dispatch) => {
  return {
    receiveTodo: (todo) => {
      dispatch(TodoActions.receiveTodo(todo))
    }
  };
};

export default connect(mSTP, mDTP)(TodoList)