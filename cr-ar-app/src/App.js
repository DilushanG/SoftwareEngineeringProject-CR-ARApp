import React from "react";
import "./Styles/main.css";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";


import Student from "./Components/Student";

import AddStudent from "./Components/AddStudent";
import Table from "./Components/Table";

const list = [
  { Code: "EC1010",Course: "Software Construction",Credit: "3",Core: "Core",Coordinator: "jananie",Prerequiste: "Operating System",Status: "Remove"},
  { Code: "EC1010",Course: "Software Construction",Credit: "3",Core: "Core",Coordinator: "jananie",Prerequiste: "Operating System",Status: "Remove"},
  { Code: "EC1010",Course: "Software Construction",Credit: "3",Core: "Core",Coordinator: "jananie",Prerequiste: "Operating System",Status: "Remove"},
  { Code: "EC1010",Course: "Software Construction",Credit: "3",Core: "Core",Coordinator: "jananie",Prerequiste: "Operating System",Status: "Remove"},
  { Code: "EC1010",Course: "Software Construction",Credit: "3",Core: "Core",Coordinator: "jananie",Prerequiste: "Operating System",Status: "Remove"},
  { Code: "EC1010",Course: "Software Construction",Credit: "3",Core: "Core",Coordinator: "jananie",Prerequiste: "Operating System",Status: "Remove"},
  { Code: "EC1010",Course: "Software Construction",Credit: "3",Core: "Core",Coordinator: "jananie",Prerequiste: "Operating System",Status: "Remove"}
];

const colNames = ['Code','Course','Credit','Core/Technical','Coordinator','Prerequiste','Status'];

function App() {
  return (
    <React.Fragment>
      <header>
        <NavBar/>
      </header>
      
=======
      <Student />
    </React.Fragment>
  );
}

export default App;
