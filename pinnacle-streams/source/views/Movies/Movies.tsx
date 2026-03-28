// IMPORTED CORE MODULES
import { type ReactElement } from "react";
// IMPORTED STYLESHEETS
import "./css/Movies.css";
// IMPORTED CUSTOM MODULES
import Nav from "../../partials/Nav/Nav";

const Movies = function (): ReactElement {
    return (
        <>
            <Nav isMainNav={false} />
            <div className="div-main-edge-container"></div>
        </>
    );
};

export default Movies;
