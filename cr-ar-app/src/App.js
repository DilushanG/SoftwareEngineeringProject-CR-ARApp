import React from "react";
import "./Styles/main.css";
import NavBar from "./Components/NavBar";
import Advisor from "./Components/advisor";
import Home from "./Components/Home";


//import CourseTable from "./Components/CourseTable";
import Student from "./Components/Student";
import AddStudent from "./Components/AddStudent";
import Table from "./Components/Table";
import CourseTable from "./Components/CourseTable";
import NewSemester from "./Components/NewSemester";
import Modal from "./Components/Modal";

import { Route,Routes } from "react-router-dom";
import DropDown from "./Components/DropDown";

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
    <>
      <header>
        <NavBar />
      </header>
      
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/student" element={<Student />}></Route>
        <Route path="/courses" element={<CourseTable />}></Route>
        <Route path="/advisors" element={<Advisor />}></Route>
        <Route path="/newsemester" element={<NewSemester />}></Route>
      </Routes>
    </>
  );
}

export default App;
