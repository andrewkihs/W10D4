import React from "react"
import ReactDOM from "react-dom"
import configureStore from './store/store'
import * as todoActions from "./actions/todo_actions"
import { receiveTodo , receiveTodos, removeTodo } from "./actions/todo_actions"
import { receiveStep , receiveSteps, removeStep } from "./actions/steps_actions"
// import { RECEIVE_TODO, RECEIVE_TODOS }from ''
// import RECEIVE_TODO from "./actions/todo_actions"
// import RECEIVE_TODOS from "./actions/todo_actions";

document.addEventListener("DOMContentLoaded", () => {
    let content = document.getElementById("content");
    ReactDOM.render(<h1>Todos App</h1>, content);

    let store = configureStore();
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
          id: 4,
          title: "Make single todo",
          body: "Just one please",
          done: false,
    }
    const singleStep = { id: 5, title: 'Take a break!', done: false, todo_id: 1 };


store.dispatch(receiveTodos(newTodos));
store.dispatch(receiveSteps(newSteps));
console.log(store.getState()); // should return only the new todos and steps

store.dispatch(receiveTodo(singleTodo));
store.dispatch(receiveStep(singleStep));
console.log(store.getState()); // should include the newly added todo and step

// store.dispatch(receiveTodo({ id: 3, title: "Newer Todo" ...etc }));
// store.dispatch(receiveStep({ id: 3, title: "Newer Step", done: true ...etc }));
console.log(store.getState()); // should update the previously added todo and step

store.dispatch(removeTodo(3));
store.dispatch(removeStep(3));
console.log(store.getState()); // should not include the previously added todo
});