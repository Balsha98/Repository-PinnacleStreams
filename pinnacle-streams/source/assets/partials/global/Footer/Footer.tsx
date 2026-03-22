// IMPORTED CORE COMPONENTS
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
// IMPORTED STYLESHEETS
import "./css/Footer.css";
// IMPORTED CUSTOM COMPONENTS
import Logo from "../Logo/Logo";

const Footer = function () {
    return (
        <footer className="main-footer-container">
            <div className="div-main-footer-content-container">
                <div className="div-main-footer-info-overview-container">
                    <div className="div-main-footer-info-container">
                        <Logo />
                        <p>The premium streaming home for hit shows, blockbuster movies, live sports, and exclusive Pinnacle Originals. Stream on demand or watch live - always on your terms.</p>
                    </div>
                    <ul className="main-footer-info-overview-socials-list">
                        <li className="main-footer-info-overview-socials-list-item">
                            <a href="#">
                                <Facebook size={18} />
                            </a>
                        </li>
                        <li className="main-footer-info-overview-socials-list-item">
                            <a href="#">
                                <Instagram size={18} />
                            </a>
                        </li>
                        <li className="main-footer-info-overview-socials-list-item">
                            <a href="#">
                                <Youtube size={18} />
                            </a>
                        </li>
                        <li className="main-footer-info-overview-socials-list-item">
                            <a href="#">
                                <Twitter size={18} />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="div-main-footer-links-list-container">
                    <h4>Browse</h4>
                    <ul className="main-footer-links-list">
                        <li className="main-footer-links-list-item">
                            <Link to="/home">Home</Link>
                        </li>
                        <li className="main-footer-links-list-item">
                            <Link to="/home">Shows</Link>
                        </li>
                        <li className="main-footer-links-list-item">
                            <Link to="/home">Movies</Link>
                        </li>
                        <li className="main-footer-links-list-item">
                            <Link to="/home">Pinnacle Originals</Link>
                        </li>
                        <li className="main-footer-links-list-item">
                            <Link to="/home">Live TV</Link>
                        </li>
                        <li className="main-footer-links-list-item">
                            <Link to="/home">News</Link>
                        </li>
                    </ul>
                </div>
                <div className="div-main-footer-links-list-container">
                    <h4>Account</h4>
                    <ul className="main-footer-links-list">
                        <li className="main-footer-links-list-item">
                            <Link to="/signin">Sign In</Link>
                        </li>
                        <li className="main-footer-links-list-item">
                            <Link to="/signup">Start Free Trial</Link>
                        </li>
                        <li className="main-footer-links-list-item">
                            <Link to="/profile">Manage Plan</Link>
                        </li>
                        <li className="main-footer-links-list-item">
                            <a href="#">Gift Cards</a>
                        </li>
                        <li className="main-footer-links-list-item">
                            <a href="#">Student Discount</a>
                        </li>
                    </ul>
                </div>
                <div className="div-main-footer-links-list-container">
                    <h4>Support</h4>
                    <ul className="main-footer-links-list">
                        <li className="main-footer-links-list-item">
                            <a href="#">Help Center</a>
                        </li>
                        <li className="main-footer-links-list-item">
                            <a href="#">Contact Us</a>
                        </li>
                        <li className="main-footer-links-list-item">
                            <a href="#">Device Support</a>
                        </li>
                        <li className="main-footer-links-list-item">
                            <a href="#">Accessibility</a>
                        </li>
                        <li className="main-footer-links-list-item">
                            <a href="#">Sitemap</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="div-main-footer-copyright-container">
                <p>&copy; {new Date().getFullYear()} Pinnacle Streams, Inc. All rights reserved.</p>
                <ul className="main-footer-copyright-links-list">
                    <li className="main-footer-copyright-links-list-item">
                        <a href="#">Privacy Policy</a>
                    </li>
                    <li className="main-footer-copyright-links-list-item">
                        <a href="#">Terms of Use</a>
                    </li>
                    <li className="main-footer-copyright-links-list-item">
                        <a href="#">Cookie Settings</a>
                    </li>
                    <li className="main-footer-copyright-links-list-item">
                        <a href="#">Accessibility</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
