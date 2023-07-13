import "../Styles/NewSemesterStyles.css";
import SearchBar from "./SearchBar";
import NewStudentButton from "./NewStudentButton";
import DropDownYear from "./DropDownYear";
import React, { useState } from "react";
import "../Styles/main.css";
import "../Styles/HomeStyles.css";

import DropDownDepartment from "./DropDownDepartment";
import DropDownSemester from "./DropDownSemester";
import Table from "./Table";
import MainHead from "./MainHead";

function NewSemester() {

  const list = [
    {
      Code: "EC1010",
      Course: "Software Construction",
      Credit: "3",
      Core: "Core",
      Coordinator: "jananie",
      Prerequiste: "Operating System",
      Status: "Remove",
    },
    {
      Code: "EC1010",
      Course: "Software Construction",
      Credit: "3",
      Core: "Core",
      Coordinator: "jananie",
      Prerequiste: "Operating System",
      Status: "Remove",
    },
    {
      Code: "EC1010",
      Course: "Software Construction",
      Credit: "3",
      Core: "Technical",
      Coordinator: "jananie",
      Prerequiste: "Operating System",
      Status: "Remove",
    },
    {
      Code: "EC1010",
      Course: "Software Construction",
      Credit: "3",
      Core: "Core",
      Coordinator: "jananie",
      Prerequiste: "Operating System",
      Status: "Remove",
    },
    {
      Code: "EC1010",
      Course: "Software Construction",
      Credit: "3",
      Core: "Technical",
      Coordinator: "jananie",
      Prerequiste: "Operating System",
      Status: "Remove",
    },
    {
      Code: "EC1010",
      Course: "Software Construction",
      Credit: "3",
      Core: "Technical",
      Coordinator: "jananie",
      Prerequiste: "Operating System",
      Status: "Remove",
    },
    {
      Code: "EC1010",
      Course: "Software Construction",
      Credit: "3",
      Core: "Core",
      Coordinator: "jananie",
      Prerequiste: "Operating System",
      Status: "Remove",
    },
  ];

  const colNames = [
    "Code",
    "Course",
    "Credit",
    "Core/Technical",
    "Coordinator",
    "Prerequiste",
    "Status",
  ];


  return (
    <>
      <div className="table-wrapper">
        {list.length > 0 && (
          <table className="table">
            <thead>
              <tr>
                {colNames.map((headerItem, index) => (
                  <th className="expand" key={index}>
                    {headerItem.toUpperCase()}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Object.values(list).map((obj, index) => (
                <tr className="expand" key={index}>
                  {Object.values(obj).map((value, index2) => (
                    <td key={index2}>
                      {index2 === 3 && value === "Core" ? (
                        <button className="label-core">{value}</button>
                      ) : index2 === 3 && value === "Technical" ? (
                        <button className="label-technical">{value}</button>
                      ) : index2 === 6 ? (
                        <button className="label-remove">Remove</button>
                      ) : (
                        <span>{value}</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <div className="search-bar-search-bar">
        <div className="search-bar-frame-5077x">
          <p className="search-bar-students">Add a New Semester</p>
        </div>
      </div>
      <div className="box-1">
        <div className="dropdown-wrapper">
          <div className="h-1">
            <DropDownYear />
            <DropDownDepartment />
            <DropDownSemester />
          </div>
        </div>
      </div>
    </>
  );
}

export default NewSemester;