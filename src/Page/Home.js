import React, { useEffect, useState } from "react";

import axios from "axios";
import TodoList from "../components/TodoList";

import "./home.css";
import TodoForm from "../components/TodoForm";

function Home() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [newTodoText, setNewTodoText] = useState("");

  useEffect(() => {
    setIsLoading(true);

    axios
      .get("http://localhost:5000/todos")
      .then((res) => {
        const data = res.data;
        setTodos(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);

  const deleteTodo = (id) => {
    console.log(id);
    axios
      .delete(`http://localhost:5000/todos/${id}`)
      .then(() => {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
      })
      .catch((err) => {
        console.error("Error deleting todo:", err);
      });
  };

  const markComplete = (id) => {
    axios
      .put(`http://localhost:5000/todos/${id}`, { completed: true })
      .then(() => {
        const updatedTodos = todos.map((todo) => {
          if (todo.id === id) {
            return { ...todo, completed: true };
          }
          return todo;
        });
        setTodos(updatedTodos);
      })
      .catch((err) => {
        console.error("Error marking as complete:", err);
      });
  };

  const handleAddTodo = (newTodo) => {
    console.log(newTodo);
    axios
      .post("http://localhost:5000/todos", newTodo)
      .then((res) => {
        const addedTodo = res.data;
        setTodos([...todos, addedTodo]);
      })
      .catch((err) => {
        console.error("Error adding todo:", err);
      });
  };

  return (
    <div>
      <div>
        <div className="main_form">
          <TodoForm onAddTodo={handleAddTodo} />
        </div>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            {todos && (
              <div className="todo-list">
                <TodoList
                  items={todos}
                  markComplete={markComplete}
                  deleteTodo={deleteTodo}
                />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
