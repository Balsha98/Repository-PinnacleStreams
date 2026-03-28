// IMPORTED CORE MODULES
import { useEffect, type ReactElement } from "react";
// IMPORTED STYLESHEETS
import "./css/Movies.css";
// IMPORTED CUSTOM MODULES
import Nav from "../../partials/Nav/Nav";

const Movies = function (): ReactElement {
    useEffect(() => {
        document.title = "Pinnacle Streams | Movies";
    }, []);

    return (
        <>
            <Nav isMainNav={false} />
            <div className="div-main-edge-container"></div>
        </>
    );
};

export default Movies;
