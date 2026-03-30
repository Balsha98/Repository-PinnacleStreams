// IMPORTER CORE MODULES
import type { ReactElement } from "react";
import { ChevronDown, LayoutGrid, List, Search } from "lucide-react";
// IMPORTER STYLESHEETS
import "./css/Filters.css";

const Filters = function (): ReactElement {
    return (
        <div className="div-movies-view-filters-container">
            <div className="div-movies-view-filters-search-container">
                <Search size={16} />
                <input id="search" type="text" name="search" placeholder="Search movies..." />
            </div>
            <div className="div-movies-view-filters-params-lists-container">
                <div className="div-movies-view-filters-params-list-container">
                    <span>Genre:</span>
                    <ul className="movies-view-filters-params-list">
                        <li className="movies-view-filters-params-list-item">
                            <button className="active">All</button>
                        </li>
                        <li className="movies-view-filters-params-list-item">
                            <button>Action</button>
                        </li>
                        <li className="movies-view-filters-params-list-item">
                            <button>Drama</button>
                        </li>
                        <li className="movies-view-filters-params-list-item">
                            <button>Horror</button>
                        </li>
                        <li className="movies-view-filters-params-list-item">
                            <button>Comedy</button>
                        </li>
                        <li className="movies-view-filters-params-list-item">
                            <button>Sci-Fi</button>
                        </li>
                        <li className="movies-view-filters-params-list-item">
                            <button>Animation</button>
                        </li>
                        <li className="movies-view-filters-params-list-item">
                            <button>Fantasy</button>
                        </li>
                        <li className="movies-view-filters-params-list-item">
                            <button>Musical</button>
                        </li>
                    </ul>
                </div>
                <div className="div-movies-view-filters-params-list-container">
                    <span>Rating:</span>
                    <ul className="movies-view-filters-params-list">
                        <li className="movies-view-filters-params-list-item">
                            <button className="active">All</button>
                        </li>
                        <li className="movies-view-filters-params-list-item">
                            <button>G</button>
                        </li>
                        <li className="movies-view-filters-params-list-item">
                            <button>PG</button>
                        </li>
                        <li className="movies-view-filters-params-list-item">
                            <button>PG-13</button>
                        </li>
                        <li className="movies-view-filters-params-list-item">
                            <button>R</button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="div-movies-view-filters-actions-container">
                <div className="div-movies-view-filters-actions-select-container">
                    <select id="sort" name="sort">
                        <option value="default">Sort: Default</option>
                        <option value="year-asc">Oldest First</option>
                        <option value="year-desc">Newest First</option>
                        <option value="title-asc">Title A-Z</option>
                        <option value="title-desc">Title Z-A</option>
                    </select>
                    <ChevronDown size={14} />
                </div>
                <div className="div-movies-view-filters-actions-layout-container">
                    <button className="active" data-layout="grid">
                        <LayoutGrid size={14} />
                    </button>
                    <button data-layout="list">
                        <List size={14} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Filters;
