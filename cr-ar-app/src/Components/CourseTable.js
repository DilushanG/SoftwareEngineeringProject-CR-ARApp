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


  
  function CourseTable() {
    
    const handleSearch = (searchTerm) => {
      // Perform search logic here using the searchTerm
      console.log('Search term:', searchTerm);
    };
    const handledownload = (Term) => {
      // Perform search logic here using the searchTerm
      console.log('Download:', Term);
    };
    const list = [
    { Course: "Software Construction",Code: "EC1010",Credit: "3",Core: "Core",Coordinator: "jananie",Prerequiste: "Operating System",Status: "Close"},
    { Course: "Software Construction",Code: "EC1010",Credit: "3",Core: "Core",Coordinator: "jananie",Prerequiste: "Operating System",Status: "Close"},
    { Course: "Software Construction",Code: "EC1010",Credit: "3",Core: "Core",Coordinator: "jananie",Prerequiste: "Operating System",Status: "Close"},
    { Course: "Software Construction",Code: "EC1010",Credit: "3",Core: "Core",Coordinator: "jananie",Prerequiste: "Operating System",Status: "Close"},
    { Course: "Software Construction",Code: "EC1010",Credit: "3",Core: "Core",Coordinator: "jananie",Prerequiste: "Operating System",Status: "Close"},
    { Course: "Software Construction",Code: "EC1010",Credit: "3",Core: "Core",Coordinator: "jananie",Prerequiste: "Operating System",Status: "Close"},
    { Course: "Software Construction",Code: "EC1010",Credit: "3",Core: "Core",Coordinator: "jananie",Prerequiste: "Operating System",Status: "Close"}
  ];
  
  const colNames = ['Course','Code','Credit','Core/Technical','Coordinator','Prerequiste','Status'];
    
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

               
        </div>
        </div>
        </div>
        </div>
        <div>
        <Table list={list} colNames={colNames}/>
        <div>
          <DownloadButton onClick={handledownload} />
        </div>
        </div>
        
        

      
      </div>
      
      
        

      
    );
  }
  
  export default CourseTable;