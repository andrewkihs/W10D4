import React from "react"
import ReactDOM from "react-dom"
import configureStore from './store/store'
import * as todoActions from "./actions/todo_actions"
import { receiveTodo , receiveTodos, removeTodo } from "./actions/todo_actions"
import { receiveStep , receiveSteps, removeStep } from "./actions/steps_actions"
import App from "./components/app"
import Root from "./components/root"
import { allTodos } from './reducers/selectors';

// import { RECEIVE_TODO, RECEIVE_TODOS }from ''
// import RECEIVE_TODO from "./actions/todo_actions"
// import RECEIVE_TODOS from "./actions/todo_actions";

document.addEventListener("DOMContentLoaded", () => {
  let content = document.getElementById("content");
  let store = configureStore();

  // window.allTodos = allTodos;
  // // console.log(allTodos(store))
  // ReactDOM.render(<Root store={store}/>, content);

  window.store = store;
  const newTodos = [
    {
      id: 1,
      title: "learn redux",
      body: "with soap",
      done: false,
    },
    
    {
      id: 2,
      title: "make examples",
      body: "blah blah content would go here",
      done: true,
    },
    
    {
      id: 3,
      title: "drink coffee",
      body: "get creamer",
      done: false,
    },
  ];

  const newSteps = [
      { id: 1, title: 'Dispatch actions', done: false, todo_id: 1 },
      { id: 2, title: 'Add print statements', done: false, todo_id: 2 },
      { id: 3, title: 'Go to the store', done: false, todo_id: 3 },
      { id: 4, title: 'Gooogle Redux', done: false, todo_id: 1 },
  ]

  const singleTodo = {
    id: 3,
    title: "dont drink coffee",
    body: "dont get creamer",
    done: true,
  };


  store.dispatch(receiveTodos(newTodos));
  store.dispatch(receiveSteps(newSteps));

  //store.dispatch(receiveTodo(singleTodo));

  window.allTodos = allTodos;
  // const initialState = store.getState()
  console.log(allTodos(store.getState()))
  ReactDOM.render(<Root store={store}/>, content);
});