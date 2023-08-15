import { useState } from "react";

import "./home.css";
import TodoList from "../components/TodoList";

const Home = ({ data, age }) => {
  console.log(data);
  console.log(age);

  const todos = [
    { id: 1, text: "Buy groceries", completed: false },
    { id: 2, text: "Finish homework", completed: true },
    { id: 3, text: "Go for a run", completed: false },
    { id: 4, text: "Call a friend", completed: true },
  ];

  return (
    <div>
      <h1>Todo</h1>
      <div className="todo-list">
        {/* <p>{data}</p>
        <p>{age}</p> */}
        <TodoList items={todos} />
      </div>

      <div className="">
        <h2> Uncompleted Tasks</h2>

        <TodoList items={todos.filter((todo) => !todo.completed)} />
      </div>

      <div className="">
        <h2> completed Tasks</h2>

        <TodoList items={todos.filter((todo) => todo.completed)} />
      </div>
    </div>
  );
};

export default Home;
