import "../Styles/HomeStyles.css";
import "../Images/arrow.png";
//import DropDownYear from "./DropDownYear";
import "../Styles/CourseTable.css";
import Table from "./Table.js";

const list = [
    { Code: "EC1010",Course: "Software Construction",Credit: "3",Core: "Core",Coordinator: "jananie",Prerequiste: "Operating System",Status: "Close"},
    { Code: "EC1010",Course: "Software Construction",Credit: "3",Core: "Core",Coordinator: "jananie",Prerequiste: "Operating System",Status: "Close"},
    { Code: "EC1010",Course: "Software Construction",Credit: "3",Core: "Core",Coordinator: "jananie",Prerequiste: "Operating System",Status: "Close"},
    { Code: "EC1010",Course: "Software Construction",Credit: "3",Core: "Core",Coordinator: "jananie",Prerequiste: "Operating System",Status: "Close"},
    { Code: "EC1010",Course: "Software Construction",Credit: "3",Core: "Core",Coordinator: "jananie",Prerequiste: "Operating System",Status: "Close"},
    { Code: "EC1010",Course: "Software Construction",Credit: "3",Core: "Core",Coordinator: "jananie",Prerequiste: "Operating System",Status: "Close"},
    { Code: "EC1010",Course: "Software Construction",Credit: "3",Core: "Core",Coordinator: "jananie",Prerequiste: "Operating System",Status: "Close"}
  ];
  
  const colNames = ['Code','Course','Credit','Core/Technical','Coordinator','Prerequiste','Status'];
  
  function CourseTable() {
    return (
      <div>
        <Table list={list} colNames={colNames}/>
      </div>
    );
  }
  
  export default CourseTable;