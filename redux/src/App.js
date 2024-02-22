import React from 'react';
import './App.css';
import Counter from './Counter';
import { Provider } from 'react-redux';
import counterReducer from './reducers'; // Import your reducer
import { createStore } from 'redux';

// Create the Redux store
const store = createStore(counterReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Redux Counter App</h1>
        <Counter />
      </div>
    </Provider>
  );
}

export default App;