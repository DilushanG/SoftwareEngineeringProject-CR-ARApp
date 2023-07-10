import "../Styles/StudentStyle.css";
import SearchBar from './SearchBar';
import NewStudentButton from "./NewStudentButton";
import DropDownYear from "./DropDownYear";
import React, { useState } from 'react';
import "../Styles/main.css"
import "../Styles/HomeStyles.css";

import DropDownDepartment from "./DropDownDepartment";
import DropDownSemester from "./DropDownSemester";

function Student(){
    const handleNewStudent = () => {
        // Handle the "New Student" button click event
        console.log('New Student button clicked');
      };
    const handleSearch = (searchTerm) => {
        // Perform search logic here using the searchTerm
        console.log('Search term:', searchTerm);
      };

    return(
      <div>
        <div className="box">
        Students
        <div className="SearchBar">
        <SearchBar onSearch={handleSearch} />
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
      
      </div>
        
        
    );
}

export default Student;