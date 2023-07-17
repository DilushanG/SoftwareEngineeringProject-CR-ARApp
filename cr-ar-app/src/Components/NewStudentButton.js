import React from 'react';
import { FiPlus } from 'react-icons/fi';
import '../Styles/StudentStyle.css';



function NewStudentButton({ onClick }) {
 
  return (
    <button className="new-student-button" onClick={onClick}>
      <FiPlus className="plus-icon" />
      New Student
    </button>
  );
}

export default NewStudentButton;
