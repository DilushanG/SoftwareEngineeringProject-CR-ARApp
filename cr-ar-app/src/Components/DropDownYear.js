import React from "react";
import "../Styles/DropDown.css";

function DropDownYear() {

    return ( 
    <div className="dropdown-container">
      <button className="dropdown-button">
        Dropdown
      </button>
        <div className="dropdown-menu">
          <a href="#">Option 1</a>
          <a href="#">Option 2</a>
          <a href="#">Option 3</a>
        </div>
    </div>
    );
}

export default DropDownYear;