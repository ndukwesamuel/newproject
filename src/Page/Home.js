import { useEffect, useState } from "react";

import "./home.css";
import TodoList from "../components/TodoList";
import { Todos } from "../uitils";

const Home = ({}) => {
  const [todos, setTodos] = useState(null);
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

  const [quote, setQuote] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, [count]);

  console.log(quote);

  return (
    <div>
      <h1>Todo</h1>

      <div>
        <h1>Random Quote</h1>

        {console.log(quote)}
      </div>

      <button onClick={handleCount}>CLick {count} times </button>

      {todos ? (
        <div className="todo-list">
          <TodoList
            items={todos}
            markComplete={markComplete}
            deleteTodo={deleteTodo}
          />
        </div>
      ) : (
        <h1> No data found </h1>
      )}
    </div>
  );
};

export default Home;
