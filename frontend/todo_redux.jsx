import React from "react"
import ReactDOM from "react-dom"
import configureStore from './store/store'
import * as todoActions from "./actions/todo_actions"
import { receiveTodo , receiveTodos, removeTodo } from "./actions/todo_actions"
// import { RECEIVE_TODO, RECEIVE_TODOS }from ''
// import RECEIVE_TODO from "./actions/todo_actions"
// import RECEIVE_TODOS from "./actions/todo_actions";

document.addEventListener("DOMContentLoaded", () => {
    let content = document.getElementById("content");
    ReactDOM.render(<h1>Todos App</h1>, content);

    let store = configureStore();
    window.store = store;
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
store.getState(); // should return default state object
store.dispatch(receiveTodo({ id: 3, title: "New Todo" }));
store.getState(); // should include the newly added todo
store.dispatch(receiveTodos(newTodos));
console.log(store.getState()); // should return only the new todos
store.dispatch(removeTodo(2));
console.log(store.getState());
})