//import "../Styles/StudentStyle.css";
import SearchBar from './SearchBar';
import DropDownYear from "./DropDownYear";
import React, { useState } from 'react';
import "../Styles/main.css"

function Advisor(){
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
        </div>
        </div>
        </div>
        
    );
}
export default Student;