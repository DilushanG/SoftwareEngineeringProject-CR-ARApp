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
      </div>
      <div className="h1-h1x">
      <div>
        <div className="h1-the-expert-in-anyth">
          <p className="h1-the-expert-text-0x">The Expert,</p>
          <p className="h1-in-anything-text-1x">in Anything</p>
        </div>
      </div>
      <div>
        <div className="h1-was-once-abeginner">
          <p className="h1-was-once-text-0x">was once</p>
          <p className="h1-component-text-1x"> </p>
          <p className="h1-abeginner-text-2x">A Beginner.</p>
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