import React from "react";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import AddStudent from "./Components/AddStudent";

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
