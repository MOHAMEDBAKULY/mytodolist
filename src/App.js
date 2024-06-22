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
  return (
    <div className="header">
      <h2>Get your things done Easily</h2>
      <form className="form">
        <input type="text" placeholder="Start packing" />
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
  return (
    <div className="list-of-items">
      <ul className="lists">
        <Items />
      </ul>
    </div>
  );
}

function Items() {
  return (
    <li>
      <p>This is item one</p>
      <div className="left">
        <span>✍🏽</span> <span>🗑</span>
      </div>
    </li>
  );
}
