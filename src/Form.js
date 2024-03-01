import { useState } from "react";
import React from "react";

function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, done: false, id: Date.now() };

    onAddItems(newItem);

    setDescription("");
    setQuantity("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="TODO Lists"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default Form;
