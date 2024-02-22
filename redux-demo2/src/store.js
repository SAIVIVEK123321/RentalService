// store.js
import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todos';

const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

export default store;