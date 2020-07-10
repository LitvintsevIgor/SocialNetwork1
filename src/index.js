import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state from "./components/redux/state";

// let postData = [
//     {id: 1, postMessage: "Hi, how are you?", likes: 5},
//     {id: 2, postMessage: "It is my post", likes: 9},
//     {id: 2, postMessage: "It is my post", likes: 9},
//     {id: 2, postMessage: "It is my post", likes: 9},
//     {id: 2, postMessage: "It is my post", likes: 9}
// ];
//
// let dialogsData = [
//     {id: 1, name: "Иван"},
//     {id: 2, name: "Света"},
//     {id: 3, name: "Петр"},
//     {id: 4, name: "Антон"},
//     {id: 5, name: "Олег"}
// ];
//
// let messagesData = [
//     {id: 1, message: "Привет Василий"},
//     {id: 2, message: "Хохохо С днем рождения"},
//     {id: 3, message: "Как дела?"},
//     {id: 4, message: "Что расскажешь?"}
// ];


ReactDOM.render(
  <React.StrictMode>
    <App state={state}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
