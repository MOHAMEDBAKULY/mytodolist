import React, { useState } from "react";
import Todoform from "/Todoform";
import Todo from "/Todo";

function Todolist() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo === todo) return;

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  };

  return (
    <div>
      <h1>What's the Plan for Today</h1>
      <Todoform onSubmit={addTodo} />
      <Todo todos={todos} completeTodo={completeTodo} />
    </div>
  );
}

export default Todolist;
