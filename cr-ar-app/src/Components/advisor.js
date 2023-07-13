import "../Styles/AdvisorStyle.css";
import SearchBar from './SearchBar';
import Table from './Table';
import DropDownYear from "./DropDownYear";
import DropDownDepartment from "./DropDownDepartment";
import DropDownSemester from "./DropDownSemester";
import Tickbox from './TickBox';
import React, { useState } from 'react';
import "../Styles/main.css"
import AdvisorTable from "./AdvisorTable";

function advisor(){
    const handleSearch = (searchTerm) => {
        // Perform search logic here using the searchTerm
        console.log('Search term:', searchTerm);
      };

    const list=[
        { REG_NUMBER: "2019/E/001",NAME: "Aarthy V",ADVISOR: "Dr. Kaneshwaran"},
        { REG_NUMBER: "2019/E/002",NAME: "Aasifa F",ADVISOR: "Prof. Atputharajah"},
        { REG_NUMBER: "2019/E/032",NAME: "Dilushan G",ADVISOR: "Dr. Kaneshwaran"}
      ];

      const colNames = [' ','REG_NUMBER','NAME','ADVISOR'];

    return(
        <div>
        <div className="box" style={{ left: '170px' }}>
            <div className="advisorTitle" >
            Advisors
            </div>
        <div className="SearchBar" >
        <SearchBar onSearch={handleSearch} name="Search advisors..." />
        <div className="box-2">
        <div className="h-2">
        <DropDownYear/>
        <DropDownDepartment/>
        <DropDownSemester/></div>
        </div>
        </div>
        <label>
            <input type="checkbox"/>
            <span class="checkbox"></span>
                
        </label>
        </div>
        
        <div className = "table">
            <AdvisorTable list={list} colNames={colNames} />
        </div>
        </div>
    );
}
export default advisor;
