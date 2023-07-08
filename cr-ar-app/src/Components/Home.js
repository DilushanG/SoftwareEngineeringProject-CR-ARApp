import "../Styles/HomeStyles.css";
import "../Images/arrow.png";
import DropDownYear from "./DropDownYear";
import DropDownDepartment from "./DropDownDepartment";
import DropDownSemester from "./DropDownSemester";
import studentImage from "../Images/student-1.jpg";
import newstudentImage from "../Images/newstudent.jpg";
import viewStudentImage from "../Images/viewStudent.jpg";

function Home() {
    return (
    <div className="home">
      <div className="front">
        <div className="box">
          <div className="h-wrapper">
            <div className="h">
              <div className="overlap-group">
                <h1 className="the-expert-in">
                  <span className="text-wrapper">The Expert, </span>
                  <span className="span">in Anything</span>
                </h1>
                <div className="was-once-a-beginner">
                  <span className="span">was once</span>
                  <span className="text-wrapper-2">&nbsp;</span>
                  <span className="text-wrapper">A Beginner.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="box">
        <div className="button-wrapper">
          <div className="button">
            <a className="text-wrapper-3" href="/#">Lets go</a>
            <i class="fa fa-arrow-right"></i>
          </div>
        </div>
      </div>
      <div className="topBox">
        Welcome Gowsikan
      </div>
      <div className="image">
      <div className="student-wrapper">
        <img className="student-2" alt="Student" src={viewStudentImage} />
        <img className="student-1" alt="Student" src={newstudentImage} />
        <img className="student" alt="Student" src={studentImage} />
      </div>
    </div>
    <div className="box-1">
        <div className="h-1"><DropDownYear/>
        <DropDownDepartment/>
        <DropDownSemester/></div>
      </div>
    </div>
    );
}

export default Home;