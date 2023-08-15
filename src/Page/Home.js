import { useEffect, useState } from "react";

import "./home.css";
import TodoList from "../components/TodoList";
import { Todos } from "../uitils";

const Home = ({}) => {
  const [todos, setTodos] = useState(Todos);
  const [count, setCount] = useState(0);

  console.log("todos");

  useEffect(() => {
    console.log("Home");
  }, []);

  const handleCount = () => {
    setCount((preCount) => preCount + 1);
  };

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  const markComplete = (id) => {
    console.log(id);
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );

    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Todo</h1>

      <button onClick={handleCount}>CLick {count} times </button>
      <div className="todo-list">
        <TodoList
          items={todos}
          markComplete={markComplete}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  );
};

export default Home;
