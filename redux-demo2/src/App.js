// App.js
import React from 'react';
import './App.css';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Redux To-Do List</h1>
        <AddTodo />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;