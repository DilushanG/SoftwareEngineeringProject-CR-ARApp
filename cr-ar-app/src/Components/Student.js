import "../Styles/StudentStyle.css";
import SearchBar from './SearchBar';
import NewStudentButton from "./NewStudentButton";
import DropDownYear from "./DropDownYear";
import React, { useState } from 'react';
import "../Styles/main.css"
import "../Styles/HomeStyles.css";

import DropDownDepartment from "./DropDownDepartment";
import DropDownSemester from "./DropDownSemester";
import Table from "./Table";


function Student(){
    const handleNewStudent = () => {
        // Handle the "New Student" button click event
        console.log('New Student button clicked');
      };
    const handleSearch = (searchTerm) => {
        // Perform search logic here using the searchTerm
        console.log('Search term:', searchTerm);
      };

      const list = [
        {Registration_No: "2019/E/001",Name: "Aarthy V",EC1011: "",EC1021: "",EC1022: "",EC10218: "",EC1078: "",Advisor:"jananie",View:"ss"},
        {Registration_No: "2019/E/114",Name: "Riza",EC1011: "",EC1021: "",EC1022: "",EC10218: "",EC1078: "",Advisor:"jananie",View:"ss"},
        {Registration_No: "2019/E/039",Name: "Gowsikan",EC1011: "",EC1021: "",EC1022: "",EC10218: "",EC1078: "",Advisor:"jananie",View:"ss"}
      
      ];
      
      const colNames = ['Registration_No','Name','EC1011','EC1021','EC10218','EC1022','EC1078','Advisor','View'];

    return(
      <div>
        <div className="box">
          <div className="studentTitle">
        Students
        </div>
        <div className="SearchBar">
        <SearchBar onSearch={handleSearch} name="Search student" />
        <div className="box">
        <NewStudentButton onClick={handleNewStudent} />
        <div className="box-2">
        <div className="h-2"><DropDownYear/>
        <DropDownDepartment/>
        <DropDownSemester/></div>
        </div>
        </div>
        </div>
        </div>
      
        <div className="table">
        <Table list={list} colNames={colNames} />
        </div>      
      </div>
        
        
    );
}

export default Student;