import React from "react";

function TodoList({ items }) {
  return (
    <ul>
      {items.map((todo) => (
        <li className={todo.completed ? "completed" : ""} key={todo.id}>
          {todo.text}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
