import { useState } from "react";

export default function Todoform(props) {
  const [input, setinput] = useState("");

  const handleChange = (e) => {
    setinput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: crypto.randomUUID,
      text: input,
    });

    setinput("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a todo"
        value={input}
        name="text"
        className="todo-input"
        onChange={handleChange}
      />

      <button className="todo-button">Add todo</button>
    </form>
  );
}
