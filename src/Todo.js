import React from "react";

function Todo({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.done}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.done ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>

      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}

export default Todo;
