import React from "react";

function TodoList({ items, markComplete, deleteTodo }) {
  return (
    <ul>
      {items.map((todo) => (
        <li className={todo.completed ? "completed" : ""} key={todo.id}>
          {todo.text}

          {!todo.completed && (
            <>
              <button onClick={() => markComplete(todo.id)}>
                Mark Completed
              </button>
              <button onClick={() => deleteTodo(todo.id)}> Delete</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
