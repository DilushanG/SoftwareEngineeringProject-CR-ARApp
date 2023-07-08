import React, { useState } from "react";
import "../Styles/DropDownStyles.css";

function DropDownSemester() {
  const [isActive, setIsActive] = useState(false);

    return ( 
    <div className="dropdown">
      <div className="dropdown-btn" onClick={e => setIsActive(!isActive)}>
        Choose Semester
      </div>
      {isActive && (
      <div className="dropdown-content">
          <div className="dropdown-item">Semester 1</div>
          <div className="dropdown-item">Semester 2</div>
          <div className="dropdown-item">Semester 3</div>
      </div>
      )}
    </div>
    );
}

export default DropDownSemester;