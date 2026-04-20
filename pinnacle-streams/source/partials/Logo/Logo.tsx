// IMPORTED CORE COMPONENTS
import type { ReactElement } from "react";
import { Mountain } from "lucide-react";
// IMPORTED STYLESHEETS
import "./css/Logo.css";

const Logo = function (): ReactElement {
    return (
        <div className="div-main-logo-container">
            <Mountain size={24} />
            <h2>Paramount</h2>
        </div>
    );
};

export default Logo;
