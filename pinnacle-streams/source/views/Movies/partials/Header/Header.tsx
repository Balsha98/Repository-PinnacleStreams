// IMPORTED CORE MODULES
import type { ReactElement } from "react";
import { ChevronRight } from "lucide-react";
// IMPORTED STYLESHEETS
import "./css/Header.css";

const Header = function (): ReactElement {
    return (
        <header className="header-movies-view-container">
            <div className="div-header-movies-view-content-container">
                <div className="div-header-movies-view-breadcrumbs-container">
                    <a href="/home">Home</a>
                    <ChevronRight size={12} />
                    <span>Movies</span>
                </div>
                <h2>
                    All <span>Movies</span>
                </h2>
                <p>Blockbusters, classics, and everything in between.</p>
            </div>
            <div className="div-header-movies-view-total-count-container">
                <p>
                    <span>16</span> of <span>16</span> movies.
                </p>
            </div>
        </header>
    );
};

export default Header;
