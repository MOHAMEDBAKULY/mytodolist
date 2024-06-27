import React, { useState } from "react";
import Todoform from "/Todoform";
import { FiEdit } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";

function Todo({ todos, completeTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  return todos.map((todo, index) => {
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <FiEdit />
        <FiTrash2 />
      </div>
    </div>;
  });
}

export default Todo;
