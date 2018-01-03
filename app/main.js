import ReactDOM from 'react-dom';
import App from './components/App';
import TodoModel from './Store/TodoModel'
import TodoListModel from './Store/TodoListModel'
import React from 'react'

const store = new TodoListModel()

ReactDOM.render(
  <App store={store} />,
  document.body.appendChild(document.createElement('div'))
);

store.addTodo("Get coffee")
store.addTodo("Write simpler code")
store.todos[0].finished = true;

setTimeout(() =>{
  store.addTodo("Get a cookie as well")
}, 2000)


window.store = store
