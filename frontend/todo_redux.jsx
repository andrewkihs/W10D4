import React from "react"
import ReactDOM from "react-dom"
import configureStore from './store/store'
import * as todoActions from "./actions/todo_actions"
import { receiveTodo , receiveTodos } from "./actions/todo_actions"
// import { RECEIVE_TODO, RECEIVE_TODOS }from ''
// import RECEIVE_TODO from "./actions/todo_actions"
// import RECEIVE_TODOS from "./actions/todo_actions";

document.addEventListener("DOMContentLoaded", () => {
    let content = document.getElementById("content");
    ReactDOM.render(<h1>Todos App</h1>, content);

    let store = configureStore();
    window.store = store;
    console.log(store.dispatch(receiveTodo({ id: 3, title: "New Todo" })));
})