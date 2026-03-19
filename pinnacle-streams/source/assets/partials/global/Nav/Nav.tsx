// IMPORTED CORE MODULES
import { Link } from "react-router-dom";
// IMPORTED STYLESHEETS
import "./css/Nav.css";
// IMPORTED CUSTOM MODULES
import LogoPartial from "../Logo/Logo";

const Nav = function () {
    return (
        <div className="div-main-nav-container">
            <div className="div-main-edge-container">
                <LogoPartial />
                <nav className="main-nav-container">
                    <ul className="main-nav-container-links-list">
                        <li className="main-nav-container-links-list-item">
                            <Link to="/login">Sign In</Link>
                        </li>
                        <li className="main-nav-container-links-list-item">
                            <Link to="/signup">Try Free</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Nav;
