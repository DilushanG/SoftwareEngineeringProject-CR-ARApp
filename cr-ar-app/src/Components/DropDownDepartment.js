import React, { useState } from "react";
import "../Styles/DropDownStyles.css";

function DropDownDepartment() {
  const [isActive, setIsActive] = useState(false);

    return ( 
    <div className="dropdown">
      <div className="dropdown-btn" onClick={e => setIsActive(!isActive)}>
        Choose Department
      </div>
      {isActive && (
      <div className="dropdown-content">
          <div className="dropdown-item">2018/2019</div>
          <div className="dropdown-item">2019/2020</div>
          <div className="dropdown-item">2020/2021</div>
      </div>
      )}
    </div>
    );
}

export default DropDownDepartment;