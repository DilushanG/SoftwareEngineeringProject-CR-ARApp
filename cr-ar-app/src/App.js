import React from "react";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";

function App() {
  return (
    <React.Fragment>
      <header>
        <NavBar/>
      </header>
      <Home/>
    </React.Fragment>
  );
}

export default App;
