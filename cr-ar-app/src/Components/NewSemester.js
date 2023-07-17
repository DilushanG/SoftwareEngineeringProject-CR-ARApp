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
import Modal from "./Modal";
import DropDown from "./DropDown";

function NewSemester() {
  const [modalOpen, setModalOpen] = useState(false);

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
          <p className="search-bar-students">Add New Semester</p>
        </div>
      </div>
      <div className="button-button-wrapper">
        <div className="button-wrapper">
          <div className="button-h1">
            <button className="button-open-semester">Open Semester</button>
          </div>
        </div>
      </div>
      <div className="button-button-wrapper-1">
        <div className="hn2">
          <div className="h-n">
            <DropDown />
          </div>
        </div>
        <div className="button-wrapper-1">
          <div className="button-h2">
            <button
              className="button-new-course"
              onClick={() => setModalOpen(true)}
            >
              Add New Course
            </button>
            {modalOpen && <Modal />}
          </div>
        </div>
      </div>
    </>
  );
}

export default NewSemester;