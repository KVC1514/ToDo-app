import React from "react";
import Todo from "./Todo";

function Lists({ items, onDeleteItem, onToggleItem, onClearList }) {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <Todo
            key={item.id}
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <div>
        <button onClick={onClearList}>Delete</button>
      </div>
    </div>
  );
}

export default Lists;
