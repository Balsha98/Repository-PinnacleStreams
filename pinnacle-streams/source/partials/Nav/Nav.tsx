// IMPORTED CORE MODULES
import type { ReactElement } from "react";
import { Link, NavLink } from "react-router-dom";
// IMPORTED STYLESHEETS
import "./css/Nav.css";
// IMPORTED CUSTOM MODULES
import type NavProps from "./types/NavProps";
import LogoPartial from "../Logo/Logo";

const Nav = function ({ isMainNav }: NavProps): ReactElement {
    return (
        <div className="div-main-nav-container">
            <div className="div-main-edge-container">
                <LogoPartial />
                {isMainNav || (
                    <nav className="main-nav-container">
                        <ul className="main-nav-container-links-list">
                            <li className="main-nav-container-links-list-item">
                                <NavLink to="/home" className={({ isActive }) => (isActive ? "active" : "")}>
                                    Home
                                </NavLink>
                            </li>
                            <li className="main-nav-container-links-list-item">
                                <NavLink to="/shows" className={({ isActive }) => (isActive ? "active" : "")}>
                                    Shows
                                </NavLink>
                            </li>
                            <li className="main-nav-container-links-list-item">
                                <NavLink to="/movies" className={({ isActive }) => (isActive ? "active" : "")}>
                                    Movies
                                </NavLink>
                            </li>
                            <li className="main-nav-container-links-list-item">
                                <NavLink to="/live" className={({ isActive }) => (isActive ? "active" : "")}>
                                    Live TV
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                )}
                <ul className="main-nav-container-actions-list">
                    <li className="main-nav-container-actions-list-item">
                        <Link to="/auth/signin">Sign In</Link>
                    </li>
                    <li className="main-nav-container-actions-list-item">
                        <Link to="/auth/signup">Try Free</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Nav;
