import "../Styles/StudentStyle.css";
import SearchBar from './SearchBar';
import Table from './Table';
import DropDownYear from "./DropDownYear";
import DropDownDepartment from "./DropDownDepartment";
import DropDownSemester from "./DropDownSemester";
import React, { useState } from 'react';
import "../Styles/main.css"

function advisor(){
    const handleSearch = (searchTerm) => {
        // Perform search logic here using the searchTerm
        console.log('Search term:', searchTerm);
      };

    return(
        <div className="box">
        Advisors
        <div className="SearchBar">
        <SearchBar onSearch={handleSearch} />
        <div className="box">
        <div className="box-1">
        <div className="h-1"><DropDownYear/>
        <DropDownDepartment/>
        <DropDownSemester/></div>
      </div>
        </div>
        </div>
        </div>
        
    );
}
export default advisor;