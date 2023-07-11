import "../Styles/StudentStyle.css";
import SearchBar from './SearchBar';

import DropDownYear from "./DropDownYear";
import React, { useState } from 'react';
import "../Styles/main.css"
import "../Styles/HomeStyles.css";
import Table from "./Table";



import DropDownDepartment from "./DropDownDepartment";
import DropDownSemester from "./DropDownSemester";
import DownloadButton from "./DownloadButton";

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
    
    const handleSearch = (searchTerm) => {
      // Perform search logic here using the searchTerm
      console.log('Search term:', searchTerm);
    };
    const handledownload = (Term) => {
      // Perform search logic here using the searchTerm
      console.log('Download:', Term);
    };
    
    return (
      
      <div>
        <div className="box">
        Course
        <div className="SearchBar">
        <SearchBar onSearch={handleSearch} />
        <div className="box">
        <div className="box-2">
        <div className="h-2"><DropDownYear/>
        <DropDownDepartment/>
        <DropDownSemester/></div>

        <div>
        <Table list={list} colNames={colNames}/>
        </div>

        <div>
          <DownloadButton onClick={handledownload} />
        </div>

        </div>
        </div>
        </div>
        </div>
      
      </div>
      
      
        

      
    );
  }
  
  export default CourseTable;