import "../Styles/StudentStyle.css";
import SearchBar from './SearchBar';
import NewStudentButton from "./NewStudentButton";
import DropDownYear from "./DropDownYear";
import React, { useState } from 'react';
import "../Styles/main.css"

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
        <div className="box">
        Students
        <div className="SearchBar">
        <SearchBar onSearch={handleSearch} />
        <div className="box">
        <NewStudentButton onClick={handleNewStudent} />
        
        </div>
        </div>
        </div>
        
    );
}

export default Student;