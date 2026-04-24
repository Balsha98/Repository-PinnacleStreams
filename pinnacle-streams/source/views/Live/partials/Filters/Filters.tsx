// IMPORTER CORE MODULES
import type { ReactElement } from "react";
import { Search } from "lucide-react";
// IMPORTER STYLESHEETS
import "./css/Filters.css";

const Filters = function (): ReactElement {
    return (
        <div className="div-movies-view-filters-container">
            <div className="div-movies-view-filters-search-container">
                <Search size={16} />
                <input id="search" type="text" name="search" placeholder="Search streams..." />
            </div>
            <div className="div-movies-view-filters-params-lists-container">
                <div className="div-movies-view-filters-params-list-container">
                    <span>Genre:</span>
                    <ul className="movies-view-filters-params-list">
                        <li className="movies-view-filters-params-list-item">
                            <button className="active">All</button>
                        </li>
                        <li className="movies-view-filters-params-list-item">
                            <button>Sports</button>
                        </li>
                        <li className="movies-view-filters-params-list-item">
                            <button>Entertainment</button>
                        </li>
                        <li className="movies-view-filters-params-list-item">
                            <button>News Movies</button>
                        </li>
                        <li className="movies-view-filters-params-list-item">
                            <button>Kids</button>
                        </li>
                        <li className="movies-view-filters-params-list-item">
                            <button>Comedy</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Filters;
