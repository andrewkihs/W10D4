import { connect } from 'react-redux';
import  * as TodoActions from '../../actions/todo_actions';
import TodoDetailView from './todo_detail_view';
// import { allTodos } from '../../reducers/selectors'

// const mSTP = (state) => {
//   return {
//     // todos: allTodos(state)
//   }
// }

const mDTP = (dispatch) => {
  return {
    removeTodo: (id) => {
      dispatch(TodoActions.removeTodo(id));
    },

  };
};

export default connect(null, mDTP)(TodoDetailView)