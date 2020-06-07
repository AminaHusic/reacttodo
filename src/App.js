import React, { useState } from "react";
import { TodoItem } from "./TodoItem";

function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSaveTodo = () => {
    setTodos([...todos, value]);
    setValue("");
  };
  return (
    <div className="App">
      <input
        value={value}
        onChange={(event) => setValue(event.target.value)}
        name="todoInput"
      />
      <button onClick={handleSaveTodo}>save</button>
      {todos.map((todo) => (
        <TodoItem value={todo} />
      ))}
    </div>
  );
}

export default App;
