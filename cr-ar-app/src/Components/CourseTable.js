import "../Styles/StudentStyle.css";
import SearchBar from './SearchBar';

import DropDownYear from "./DropDownYear";
import React, { useState, useEffect } from 'react';
import "../Styles/main.css"
import "../Styles/HomeStyles.css";
import Table from "./Table";
import '../Styles/ExtraFeatureButton.css';



import DropDownDepartment from "./DropDownDepartment";
import DropDownSemester from "./DropDownSemester";
import DownloadButton from "./DownloadButton";
import ExtraFeatureButton from "./ExtraFeatureButton";


  
  function CourseTable() {
    
    const handleSearch = (searchTerm) => {
      // Perform search logic here using the searchTerm
      console.log('Search term:', searchTerm);
    };
    const handledownload = (Term) => {
      // Perform search logic here using the searchTerm
      console.log('Download:', Term);
    };

    const handleExtra = (viewing) =>{
      console.log('view:', viewing);
    }
    const list = [
    { Course: "Software Construction",Code: "EC1010",Credit: "3",Core: "Core",Coordinator: "jananie",Prerequiste: "Operating System", RegistrationDate: "10.01.2023-30.01.2023", Status: "Close"},
    { Course: "Software Construction",Code: "EC1010",Credit: "3",Core: "Core",Coordinator: "jananie",Prerequiste: "Operating System", RegistrationDate: "10.01.2023-30.01.2023", Status: "Close"},
    { Course: "Software Construction",Code: "EC1010",Credit: "3",Core: "Core",Coordinator: "jananie",Prerequiste: "Operating System", RegistrationDate: "10.01.2023-30.01.2023", Status: "Close"},
    { Course: "Software Construction",Code: "EC1010",Credit: "3",Core: "Core",Coordinator: "jananie",Prerequiste: "Operating System", RegistrationDate: "10.01.2023-30.01.2023", Status: "Close"},
    { Course: "Software Construction",Code: "EC1010",Credit: "3",Core: "Core",Coordinator: "jananie",Prerequiste: "Operating System", RegistrationDate: "10.01.2023-30.01.2023", Status: "Close"},
    { Course: "Software Construction",Code: "EC1010",Credit: "3",Core: "Core",Coordinator: "jananie",Prerequiste: "Operating System", RegistrationDate: "10.01.2023-30.01.2023", Status: "Close"},
    { Course: "Software Construction",Code: "EC1010",Credit: "3",Core: "Core",Coordinator: "jananie",Prerequiste: "Operating System", RegistrationDate: "10.01.2023-30.01.2023", Status: "Close"}
  ];
  
  const colNames = ['Code','Name','Credit','Core/Technical','Coordinator','Prerequiste','Offered sem','Offered Dept ID','AC yr','Sem start Date', 'Sem End Date'];
    
  
  const [Data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3300/courseTable")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => console.log(err));
  }, []);
  

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
        <DropDownSemester/>
        <ExtraFeatureButton onClick={handleExtra}/>
        
        </div>     
               
        </div>
        </div>
        </div>
        </div>
        <div>
        <Table list={Data} colNames={colNames}/>
        <div>
          <DownloadButton onClick={handledownload} />
        </div>
        </div>
        
        

      
      </div>
      
      
        

      
    );
  }
  
  export default CourseTable;