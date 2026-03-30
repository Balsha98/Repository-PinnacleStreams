// IMPORTED CORE MODULES
import type { ReactElement } from "react";
import { ChevronRight } from "lucide-react";
// IMPORTED STYLESHEETS
import "./css/Header.css";

const Header = function (): ReactElement {
    return (
        <header className="header-shows-view-container">
            <div className="div-header-shows-view-content-container">
                <div className="div-header-shows-view-breadcrumbs-container">
                    <a href="/home">Home</a>
                    <ChevronRight size={12} />
                    <span>Shows</span>
                </div>
                <h2>
                    All TV <span>Shows</span>
                </h2>
                <p>Binge-worthy and prestige drama series.</p>
            </div>
            <div className="div-header-shows-view-total-count-container">
                <p>
                    <span>16</span> of <span>16</span> movies.
                </p>
            </div>
        </header>
    );
};

export default Header;
