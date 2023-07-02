import "../Styles/NavBarStyles.css";
import { Box } from "./Box";
import { MenuData } from "./MenuData";
import { imageSrc } from "../Images/appLogo.png";


function NavBar() {
    return (  
        <nav className="NavbarItems">
            <h1 className="logo">
                CR AR App
            </h1>
            <ul className="nav-menu">
                {MenuData.map((item,index)=>{
                    return(
                        <li key={index}><a href={item.url} className={item.cName}>
                            {item.title}
                        </a></li>
                    )})}
            </ul>
            <h4>
                Gowsi Kan 
            </h4>
        </nav>
    );
}

export default NavBar;