// TodoList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from './actions';

function TodoList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <div>
      <h2>To-Do List</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;