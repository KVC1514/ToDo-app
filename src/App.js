import React from "react";
import { useState } from "react";
import Lists from "./Lists";
import Form from "./Form";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  }
  function handleClearList() {
    const confirmed = window.confirm(
      "Well done for completing your goals!! 🎉"
    );

    if (confirmed) setItems([]);
  }

  return (
    <div>
      <Form onAddItems={handleAddItems} />
      <Lists
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
    </div>
  );
}

export default App;
