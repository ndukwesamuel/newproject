import React, { useState } from "react";

import "./form.css";

function TodoForm({ onAddTodo }) {
  const [newTodoText, setNewTodoText] = useState("");

  //   console.log(newTodoText);

  const handleAddTodo = (e) => {
    e.preventDefault();

    onAddTodo({ text: newTodoText, completed: false });

    setNewTodoText("");
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Enter a new todo"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
        />
        <button type="button" onClick={handleAddTodo}>
          Add
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
