import "../Styles/NavBarStyles.css";
import { MenuData } from "./MenuData";

function NavBar() {

    return (  
        <nav className="NavbarItems">
            <a href="/" className="logo">
                CR AR App
            </a>
            <ul className="nav-menu">
                <CustomLink/>
            </ul>
            <h4>
                Gowsi Kan 
            </h4>
        </nav>
    );
}

export default NavBar;

function CustomLink() {
    const path = window.location.pathname;
    return (
      <>
        {MenuData.map((item, index) => {
            return (
                <li key={index} className={path === item.url ? "active" : ""}>
                <a href={item.url} className={item.cName}>
                {item.title}
                </a>
            </li>
          );
        })}
      </>
    );
}
