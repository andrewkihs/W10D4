import React from "react"
import ReactDOM from "react-dom"
import configureStore from './store/store'

document.addEventListener("DOMContentLoaded", () => {
    let content = document.getElementById("content");
    ReactDOM.render(<h1>Todos App</h1>, content);

    let store = configureStore();
    window.store = store;
})