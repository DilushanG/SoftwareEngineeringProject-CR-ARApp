import "../Styles/StudentStyle.css";
import SearchBar from "./SearchBar";
import NewStudentButton from "./NewStudentButton";
import DropDownYear from "./DropDownYear";
import React from "react";
import "../Styles/main.css";
import "../Styles/HomeStyles.css";
import"../Styles/NewSemesterStyles.css";
import '../Styles/ExtraFeatureButton.css';


import DropDownDepartment from "./DropDownDepartment";
import DropDownSemester from "./DropDownSemester";
import Table from "./Table";
import { Icon1, Icon2, Icon3 } from "./MyIcon";
import ExtraFeatureButton from "./ExtraFeatureButton";
import MainHead from "./MainHead";

function Student() {
  const handleNewStudent = () => {
    // Handle the "New Student" button click event
    console.log("New Student button clicked");
  };
  const handleSearch = (searchTerm) => {
    // Perform search logic here using the searchTerm
    console.log("Search term:", searchTerm);
  };

  const handleExtra = (viewing) =>{
    console.log('view:', viewing);
  }

  const list = [
    {
      Registration_No: "2019/E/001",
      Name: "Aarthy V",
      EC1011: <Icon1 />,
      EC1021: <Icon1 />,
      EC1022: <Icon1 />,
      EC10218: <Icon1 />,
      EC1078: <Icon1 />,
      Advisor: "jananie",
      View: <Icon3 />,
    },
    {
      Registration_No: "2019/E/114",
      Name: "Riza",
      EC1011: <Icon2 />,
      EC1021: <Icon1 />,
      EC1022: <Icon2 />,
      EC10218: <Icon1 />,
      EC1078: <Icon1 />,
      Advisor: "jananie",
      View: <Icon3 />,
    },
    {
      Registration_No: "2019/E/039",
      Name: "Gowsikan",
      EC1011: <Icon1 />,
      EC1021: <Icon2 />,
      EC1022: <Icon1 />,
      EC10218: <Icon1 />,
      EC1078: <Icon2 />,
      Advisor: "jananie",
      View: <Icon3 />,
    },
  ];

  const colNames = [
    "Registration_No",
    "Name",
    "EC1011",
    "EC1021",
    "EC10218",
    "EC1022",
    "EC1078",
    "Advisor",
    "View",
  ];

  return (
    <div>
      <MainHead title="Students" searchTitle="Search Students..." isBtn="1"/>
      <div className="table-wrapper">
        <Table list={list} colNames={colNames} />
      </div>
    </div>
  );
}

export default Student;
