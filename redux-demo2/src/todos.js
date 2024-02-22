// todos.js
import { createReducer } from '@reduxjs/toolkit';
import { addTodo, removeTodo } from './actions';

const initialState = [];

const todosReducer = createReducer(initialState, {
  [addTodo]: (state, action) => {
    state.push(action.payload);
  },
  [removeTodo]: (state, action) => {
    return state.filter((todo) => todo.id !== action.payload);
  },
});

export default todosReducer;