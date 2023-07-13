import "../Styles/MainHead.css";
import SearchBar from "./SearchBar";
import NewStudentButton from "./NewStudentButton";

function MainHead({title,searchTitle}) {
    const handleSearch = (searchTerm) => {
        // Perform search logic here using the searchTerm
        console.log('Search term:', searchTerm);
      };

      const handleNewStudent = () => {
        // Handle the "New Student" button click event
        console.log('New Student button clicked');
      };

    return (  
    <div className="search-bar-search-bar">
        <div className="search-bar-frame-5077x">
          <p className="search-bar-students">Students</p>
        </div>
        <div className="search-bar-search-search_box">
          <div className="search-bar-frame-5083x">
            <p className="search-bar-search-students">Search students...</p>
          </div>
        </div>
        <div className="search-bar-button">
          <div className="search-bar-frame-5129x">
            <div>
              <p className="search-bar-new-student">New Student</p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default MainHead;