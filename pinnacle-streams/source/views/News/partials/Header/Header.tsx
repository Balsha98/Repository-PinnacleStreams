// IMPORTED CORE MODULES
import type { ReactElement } from "react";
import { ChevronRight } from "lucide-react";
// IMPORTED STYLESHEETS
import "./css/Header.css";

const Header = function (): ReactElement {
    return (
        <div className="div-main-edge-container">
            <header className="header-news-view-container">
                <div className="div-header-news-view-content-container">
                    <div className="div-header-news-view-breadcrumbs-container">
                        <a href="/home">Home</a>
                        <ChevronRight size={12} />
                        <span>News</span>
                    </div>
                    <h2>
                        Stories Behind the <span>Screen</span>
                    </h2>
                    <p>News, interviews, behind-the-scenes features, and exclusive coverage from the world of Pinnacle+ Originals and beyond.</p>
                </div>
                <div className="div-header-news-view-total-count-container">
                    <p>
                        <span>16</span> of <span>16</span> articles.
                    </p>
                </div>
            </header>
        </div>
    );
};

export default Header;
