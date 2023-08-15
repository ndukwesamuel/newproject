import Home from "./Home";

import "./App.css";
import About from "./About";

const App = () => {
  let name = "React";

  let greeting = " Welcome to BCT";

  let Array = [1, 2, 3, 4, 5, 6];

  const link = "http://www.google.com";

  return (
    <div className="App">
      <h1 className="main">Todo List</h1>

      <h1> {name} </h1>

      <h2>{greeting}</h2>

      {Array.map((item, index) => {
        return (
          <ul key={index}>
            <li> {item}</li>
          </ul>
        );
      })}
      <Home />

      <About />

      <a href={link}> Google SIte</a>
    </div>
  );
};

export default App;
