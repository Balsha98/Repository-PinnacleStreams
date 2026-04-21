// IMPORTED CORE COMPONENTS
import type { ReactElement } from "react";
import { Mountain } from "lucide-react";
// IMPORTED STYLESHEETS
import "./css/Logo.css";
import { Link } from "react-router-dom";

const Logo = function (): ReactElement {
    return (
        <div className="div-main-logo-container">
            <Link to="/home">
                <Mountain size={24} />
                <h2>Paramount+</h2>
            </Link>
        </div>
    );
};

export default Logo;
