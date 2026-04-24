// IMPORTED CORE MODULES
import type { ReactElement } from "react";
import { ChevronRight } from "lucide-react";
// IMPORTED STYLESHEETS
import "./css/Header.css";

const Header = function (): ReactElement {
    return (
        <header className="header-live-view-container">
            <div className="div-header-live-view-content-container">
                <div className="div-header-live-view-breadcrumbs-container">
                    <a href="/home">Home</a>
                    <ChevronRight size={12} />
                    <span>Live TV</span>
                </div>
                <h2>
                    All <span>Live</span> Streams
                </h2>
                <p>Live channels, breaking news, and nonstop entertainment.</p>
            </div>
            <div className="div-header-live-view-total-count-container">
                <p>
                    <span>16</span> of <span>16</span> streams.
                </p>
            </div>
        </header>
    );
};

export default Header;
