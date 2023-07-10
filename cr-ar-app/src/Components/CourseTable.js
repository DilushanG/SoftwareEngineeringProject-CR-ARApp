import "../Styles/HomeStyles.css";
import "../Images/arrow.png";
//import DropDownYear from "./DropDownYear";
import "../Styles/CourseTable.css";

function CourseTable() {
    return (
    
               
                <div>
                    <table className="Ctable">
                        <tr className="Crow">
                            <th className="numColumn">Number</th>
                            <th className="codeColumn">Code</th>
                            <th className="nameColumn">Course Name</th>
                            <th className="creditColumn">Credit</th>
                            <th className="ctColumn">Core/Technical</th>
                            <th className="coorColumn">Coordinator</th>
                            <th className="preColumn">Prerequesite</th>
                            <th className="regColumn">Registration date</th>
                            <th className="statusColumn">Status</th>
                        </tr>
                        <tr className="dataRow">
                            <td className="dataCell">01</td>
                            <td className="dataCell">EC 6060</td>
                            <td className="dataCell">Software Engineering</td>
                            <td className="dataCell">03</td>
                            <td className="dataCell">Core</td>
                            <td className="dataCell">Dr. J. Jarachchanthan</td>
                            <td className="dataCell">No</td>
                            <td className="dataCell">2019-01-19 - 2019-01-31</td>
                            <td className="dataCell">Closed</td>
                        </tr>
                    </table>       
                </div>
         
    
    );
}

export default CourseTable;