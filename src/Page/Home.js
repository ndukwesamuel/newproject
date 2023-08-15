import { useState } from "react";

const Home = () => {
  const [theme, setTheme] = useState("light");

  const [name, setName] = useState("samheart");
  const [age, setAge] = useState(20);

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const newahandleClick = () => {
    setName("Emeka");
    setAge(30);
  };
  return (
    <div>
      <h1>Home</h1>

      <div>
        <p>name: {name}</p>
        <p>age: {age}</p>
        <span onClick={newahandleClick}> click me</span>
      </div>

      <h2> let theme = {theme}</h2>

      <button onClick={handleClick}> click</button>
    </div>
  );
};

export default Home;
