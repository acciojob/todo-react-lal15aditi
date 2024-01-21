
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if(!(input.trim())) return;
    setTodos([...todos, {text: input, id: todos.length ? (todos[todos.length-1].id + 1) : 1}]);
    setInput('');
  }

  const deleteTodo = (id) => {
    setTodos([...todos].filter((todo) => todo.id !== id));
  }

  return (
    <div>
      <h1>To-Do List</h1>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={addTodo}>Add Todo</button>

        <ul>
          {
            todos.map((todo)=>(
              <li key={todo.id}>
                <span>{todo.text}</span>
                <button onClick={() => deleteTodo(todo.id)} >Delete</button>
              </li>
            ))
          }
        </ul>
    </div>
  )
}

export default App