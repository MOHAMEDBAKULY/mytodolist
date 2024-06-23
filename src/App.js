import { useState } from "react";

export default function App() {
  return (
    <div className="app">
      <AddItem />
      <UpdateItem />
      <ListOfItems />
    </div>
  );
}

function AddItem() {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(inputValue);
  };

  return (
    <div className="header">
      <h2>Get your things done Easily</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Start packing"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button>Add Item</button>
      </form>
    </div>
  );
}

function UpdateItem() {
  return (
    <div className="update">
      <form className="form">
        <input type="text" placeholder="Update" />
        <button>Update</button>
      </form>
    </div>
  );
}

function ListOfItems() {
  const [todos, setTodos] = useState([]);

  const myTodos = (todo) => {
    setTodos([
      ...todos,
      { id: crypto.randomUUID, task: todo, completed: false, isEditing: false },
    ]);
  };

  return (
    <div className="list-of-items">
      <AddItem myTodos={myTodos} />
      {todos.map((todo, index) => {
        <Items key={index} task={todo} />;
      })}
    </div>
  );
}

function Items() {
  return (
    <div className="container">
      <p className="Item">This is a todo</p>
      <div>
        <span className="one">🖋</span> <span className="two">🗑</span>
      </div>
    </div>
  );
}
