import Home from "./Home";

import "./App.css";
import About from "./About";

const App = () => {
  return (
    <div className="App">
      <h1 className="main">Todo List</h1>

      <Home />

      <About />
    </div>
  );
};

export default App;
