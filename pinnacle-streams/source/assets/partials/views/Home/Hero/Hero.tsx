// IMPORTED CORE MODULES
import { Link } from "react-router-dom";
import { Info, Play, Star, Zap } from "lucide-react";
// IMPORTED STYLESHEETS
import "./css/Hero.css";

const Hero = function () {
    return (
        <div className="div-home-view-hero-container">
            <header className="header-home-view-hero-container">
                <div className="div-header-home-view-hero-icon-container">
                    <Zap size={16} />
                    <span>New Season Now Streaming</span>
                </div>
                <div className="div-header-home-view-hero-info-container">
                    <h2>Yellowstone</h2>
                    <span>Season 5</span>
                </div>
            </header>
            <div className="div-home-view-hero-content-container">
                <ul className="home-view-hero-content-info-list">
                    <li className="home-view-hero-content-info-list-item">
                        <Star size={14} />
                        <span>8.7</span>
                    </li>
                    <li className="home-view-hero-content-info-list-item">
                        <span>2024</span>
                    </li>
                    <li className="home-view-hero-content-info-list-item">
                        <span>TV-MA</span>
                    </li>
                    <li className="home-view-hero-content-info-list-item">
                        <span>5 Seasons</span>
                    </li>
                </ul>
                <p>A multi-generational family of ranchers fight to maintain control of their vast land against those encroaching upon it, including land developers and a neighboring Native American reservation.</p>
                <div className="div-home-view-hero-content-actions-container">
                    <Link to="">
                        <Play size={16} />
                        <span>Watch Now</span>
                    </Link>
                    <Link to="">
                        <Info size={16} />
                        <span>Watch Now</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;
