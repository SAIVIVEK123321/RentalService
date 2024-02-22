// AddTodo.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './actions';

function AddTodo() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (text.trim() !== '') {
      dispatch(addTodo({ id: Date.now(), text }));
      setText('');
    }
  };

  return (
    <div>
      <h2>Add To-Do</h2>
      <input
        type="text"
        placeholder="Enter a to-do"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
}

export default AddTodo;