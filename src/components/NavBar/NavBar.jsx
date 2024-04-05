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
                    <li className="navbar-list_item"><img src={homeButton} alt="" />Home</li>

                </Link>

                <li className="navbar-list_item"><img src={scanButton} alt="" />Scan</li>
                <li className="navbar-list_item"><img src={profileButton} alt="" />Profile</li>
            </ul>
        </div>
    )
}

export default NavBar;