import "../Styles/AdvisorStyle.css";
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
            <div className="advisorTitle">
            Advisors
            </div>
        <div className="SearchBar">
        <SearchBar onSearch={handleSearch} name="Search Advisor" />
        <div className="box-2">
        <div className="h-2">
        <DropDownYear/>
        <DropDownDepartment/>
        <DropDownSemester/></div>
        </div>
        </div>
        </div>
    );
}
export default advisor;