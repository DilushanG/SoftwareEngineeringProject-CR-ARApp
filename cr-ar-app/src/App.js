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
  
  let Component

  switch (window.location.pathname) {
    case "/":
      Component = Home
      break;
    case "/students":
      Component = Student
      break;
    case "/courses":
      Component = CourseTable
      break;
    case "/advisors":
      Component = Advisor
      break;
    case "/newsemester":
      Component = NewSemester
      break;
  }


  return (
    <>
      <header>
        <NavBar/>
      </header>
      <Component/>
    </>
  );
}

export default App;
