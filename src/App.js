import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./Page/Home";

import "./App.css";

function App() {
  let name = "Himanshu";
  let age = 20;
  return (
    <div>
      <Navbar />
      <Home data={name} age={age} />
    </div>
  );
}

export default App;
