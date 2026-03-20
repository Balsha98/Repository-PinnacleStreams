// IMPORTED CORE COMPONENTS
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
                            <a href="#facebook">
                                <Facebook size={18} />
                            </a>
                        </li>
                        <li className="main-footer-info-overview-socials-list-item">
                            <a href="#instagram">
                                <Instagram size={18} />
                            </a>
                        </li>
                        <li className="main-footer-info-overview-socials-list-item">
                            <a href="#youtube">
                                <Youtube size={18} />
                            </a>
                        </li>
                        <li className="main-footer-info-overview-socials-list-item">
                            <a href="#twitter">
                                <Twitter size={18} />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="div-main-footer-links-list-container">
                    <h4>Browse</h4>
                    <ul className="main-footer-links-list">
                        <li className="main-footer-links-list-item">
                            <a href="#">Home</a>
                        </li>
                        <li className="main-footer-links-list-item">
                            <a href="#">Shows</a>
                        </li>
                        <li className="main-footer-links-list-item">
                            <a href="#">Movies</a>
                        </li>
                        <li className="main-footer-links-list-item">
                            <a href="#">Pinnacle Originals</a>
                        </li>
                        <li className="main-footer-links-list-item">
                            <a href="#">Live TV</a>
                        </li>
                        <li className="main-footer-links-list-item">
                            <a href="#">News</a>
                        </li>
                    </ul>
                </div>
                <div className="div-main-footer-links-list-container">
                    <h4>Account</h4>
                    <ul className="main-footer-links-list">
                        <li className="main-footer-links-list-item">
                            <a href="#">Sign In</a>
                        </li>
                        <li className="main-footer-links-list-item">
                            <a href="#">Start Free Trial</a>
                        </li>
                        <li className="main-footer-links-list-item">
                            <a href="#">Manage Plan</a>
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
