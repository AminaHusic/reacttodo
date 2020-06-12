import React, { useState } from "react";
import { TodoItem } from "./TodoItem";

function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);

  
  const addTodo = (text) => {
    const newTodo= [...todos, {text}]
    setTodos(newTodo);
  }



  const handleSaveTodo = (event) => {
    event.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue("");
  };
  const completeTodo = (index) => {
    const newTodos = [...todos]
    newTodos[index].isCompleted = true;
    setTodos(newTodos)
  };
  const removeTodo = (index) => {
    const newTodos =[...todos];
    newTodos.splice(index,1);
    setTodos(newTodos);
  }
   return (
    <div className="App">
      <h1 className="title">Unesite svoju ToDo listu: </h1>
      <div className="todo-list">
      <input
      type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        name="todoInput"
      /> 

<button onClick={handleSaveTodo}>SAVE</button>

      { todos.map((todo,index) => (
        <TodoItem  
        key={todo.id} 
        index={index} 
        todo={todo} 
        completeTodo={completeTodo}
        removeTodo={removeTodo}
         /> )) }
         
       </div>
    </div>
  );
}

export default App;
