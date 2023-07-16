import React, { useState } from "react";
import Select from "react-select";
import makeAnimated from 'react-select/animated';
import "../Styles/DDStyles.css";

function DropDown() {
  const [value1, setValue1] = useState(null);
  const [value2, setValue2] = useState(null);
  const [value3, setValue3] = useState(null);

  const options = [
    { value: "1", label: "2019/2020" },
    { value: "2", label: "2020/2021" },
    { value: "3", label: "2021/2022" },
    { value: "4", label: "2022/2023" },
  ];

  function customTheme(theme) {
    return ( {
      ...theme,
      colors: {
        ...theme.colors,
        primary25: '#009687',
        primary: 'green',
      },
    }
    );
  }

  return (
    <div className="dd-wrapper">
      <Select
        components={makeAnimated}
        options={options}
        defaultValue={value1}
        placeholder="Select the Academic Year"
        onChange={setValue1}
        isSearchable
        className="mb-3"
        theme={customTheme}
      />
      <Select
        components={makeAnimated}
        options={options}
        defaultValue={value2}
        placeholder="Select the Semester"
        onChange={setValue2}
        isSearchable
        className="mb-3"
        theme={customTheme}
      />
      <Select
        components={makeAnimated}
        options={options}
        defaultValue={value3}
        placeholder="Select the Deaprtment"
        onChange={setValue3}
        isSearchable
        className="mb-3"
        theme={customTheme}
      />
    </div>
  );
}

export default DropDown;
