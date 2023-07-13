import React from 'react';
import '../Styles/StudentStyle.css';
import '../Styles/DownloadButton.css';

function DownloadCourses({ onClick }) {
 
  return (
    <button className="downstyle" onClick={onClick}>
      Download
    </button>
  );
}

export default DownloadCourses;