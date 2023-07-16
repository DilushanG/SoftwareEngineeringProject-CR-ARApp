import React, { useState } from "react";
import Select from "react-select";
import "../Styles/DDStyles.css";

function DropDown() {
  const [value, setValue] = useState(null);

  const options = [
    { value: "1", label: "2019/2020" },
    { value: "2", label: "2019/2020" },
    { value: "3", label: "2019/2020" },
    { value: "4", label: "2019/2020" },
  ];

  return (
    <div className="dd-wrapper">
      <select name="Prequiste">
        <option value="OperatingSystem">Operating System</option>
        <option value="SoftwareEngineering">SoftwareEngineering</option>
      </select>
    </div>
  );
}

export default DropDown;
