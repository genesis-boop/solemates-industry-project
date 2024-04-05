import "./NavBar.scss"
import homeButton from "../../assets/icons/Nav_Menu_Icon/Icon_Home.svg"
import scanButton from "../../assets/icons/Nav_Menu_Icon/Icon_Scan.svg"
import profileButton from "../../assets/icons/Nav_Menu_Icon/Icon_Profile.svg"
import { Link } from "react-router-dom"

function NavBar() {
    return (
        <div className="navbar">
            <ul className="navbar-list">
                <Link to={"/recommendation"}>
                    <li className="navbar-list_item navbar-small"><img src={homeButton} alt="home button" />Home</li>

                </Link>

                <li className="navbar-list_item navbar-big"><img className="" src={scanButton} alt="scan button" />Scan</li>
                <li className="navbar-list_item navbar-small"><img src={profileButton} alt=" profile button" />Profile</li>
            </ul>
        </div>
    )
}

export default NavBar;