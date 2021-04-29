import { RECEIVE_TODO, RECEIVE_TODOS, REMOVE_TODO } from "../actions/todo_actions";

const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false,
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true,
  },
};


// examples for console testing
const newTodos = {
  1: {
    id: 1,
    title: "learn redux",
    body: "with soap",
    done: false,
  },
  2: {
    id: 2,
    title: "make examples",
    body: "blah blah content would go here",
    done: true,
  },
  3: {
    id: 3,
    title: "drink coffee",
    body: "get creamer",
    done: false,
  },
};

const todosReducer = (state = initialState, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    let todosObj = {};

    switch (action.type) {
        case RECEIVE_TODO:
            let idx = Object.keys(nextState).length
            nextState[idx + 1] = action.todo;
            return nextState;
        case RECEIVE_TODOS:
            Object.keys(action.todos).forEach((key)=> {
              todosObj[key] = action.todos[key]; // obj keys start at 1
            });
            nextState = todosObj;
            return nextState;
        case REMOVE_TODO:
            delete nextState[action.id];
            Object.keys(nextState).forEach((key, idx) => {
              todosObj[idx+1] = nextState[key];
            });
            nextState = todosObj;
            return nextState
        default:
            return state;
    }
};

export default todosReducer;
