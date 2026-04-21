// IMPORTED CORE MODULES
import { useEffect, useState, type ReactElement } from "react";
import { Link, NavLink } from "react-router-dom";
// IMPORTED STYLESHEETS
import "./css/Nav.css";
// IMPORTED CUSTOM MODULES
import type NavProps from "./types/NavProps";
import LogoPartial from "../Logo/Logo";

const Nav = function ({ isMainNav }: NavProps): ReactElement {
    const [isScrolling, setIsScrolling] = useState<boolean>(false);
    const [scrollProgress, setScrollProgress] = useState<number>(0);

    useEffect(() => {
        const onIsScrolling = (): void => {
            setIsScrolling(window.scrollY > 16);

            const currentWindowY: number = window.scrollY;
            const windowViewportHeight: number = window.innerHeight;
            const html: HTMLElement = document.documentElement;

            const totalPageHeight: number = html.scrollHeight - windowViewportHeight;
            const percentage: number = Math.floor((currentWindowY / totalPageHeight) * 100);

            setScrollProgress(percentage);
        };

        window.addEventListener("scroll", onIsScrolling, { passive: true });

        return () => window.removeEventListener("scroll", onIsScrolling);
    }, []);

    return (
        <div className={`div-main-navbar-container${isScrolling ? " fixed" : ""}`}>
            <div className="div-main-navbar-scroll-container" style={{ width: `${scrollProgress}%` }} />
            <div className="div-main-edge-container">
                <LogoPartial />
                {isMainNav || (
                    <nav className="main-navbar-container">
                        <ul className="main-navbar-container-links-list">
                            <li className="main-navbar-container-links-list-item">
                                <NavLink to="/home" className={({ isActive }) => (isActive ? "active" : "")}>
                                    Home
                                </NavLink>
                            </li>
                            <li className="main-navbar-container-links-list-item">
                                <NavLink to="/shows" className={({ isActive }) => (isActive ? "active" : "")}>
                                    Shows
                                </NavLink>
                            </li>
                            <li className="main-navbar-container-links-list-item">
                                <NavLink to="/movies" className={({ isActive }) => (isActive ? "active" : "")}>
                                    Movies
                                </NavLink>
                            </li>
                            <li className="main-navbar-container-links-list-item">
                                <NavLink to="/live" className={({ isActive }) => (isActive ? "active" : "")}>
                                    Live TV
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                )}
                <ul className="main-navbar-container-actions-list">
                    <li className="main-navbar-container-actions-list-item">
                        <Link to="/auth/signin" rel="noopener noreferrer" target="_blank">
                            Sign In
                        </Link>
                    </li>
                    <li className="main-navbar-container-actions-list-item">
                        <Link to="/auth/signup" rel="noopener noreferrer" target="_blank">
                            Try Free
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Nav;
