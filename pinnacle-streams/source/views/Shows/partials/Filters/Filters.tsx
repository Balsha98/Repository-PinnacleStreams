// IMPORTER CORE MODULES
import type { ReactElement } from "react";
import { ChevronDown, ChevronUp, LayoutGrid, List, Search } from "lucide-react";
// IMPORTER STYLESHEETS
import "./css/Filters.css";

const Filters = function (): ReactElement {
    return (
        <div className="div-shows-view-filters-container">
            <div className="div-shows-view-filters-search-container">
                <Search size={16} />
                <input id="search" type="text" name="search" placeholder="Search TV shows..." />
            </div>
            <div className="div-shows-view-filters-params-lists-container">
                <div className="div-shows-view-filters-params-list-container">
                    <span>Genre:</span>
                    <ul className="shows-view-filters-params-list">
                        <li className="shows-view-filters-params-list-item">
                            <button className="active">All</button>
                        </li>
                        <li className="shows-view-filters-params-list-item">
                            <button>Action</button>
                        </li>
                        <li className="shows-view-filters-params-list-item">
                            <button>Drama</button>
                        </li>
                        <li className="shows-view-filters-params-list-item">
                            <button>Horror</button>
                        </li>
                        <li className="shows-view-filters-params-list-item">
                            <button>Crime</button>
                        </li>
                        <li className="shows-view-filters-params-list-item">
                            <button>Comedy</button>
                        </li>
                        <li className="shows-view-filters-params-list-item">
                            <button>Sci-Fi</button>
                        </li>
                        <li className="shows-view-filters-params-list-item">
                            <button>Western</button>
                        </li>
                        <li className="shows-view-filters-params-list-item">
                            <button>Musical</button>
                        </li>
                    </ul>
                </div>
                <div className="div-shows-view-filters-params-list-container">
                    <span>Rating:</span>
                    <ul className="shows-view-filters-params-list">
                        <li className="shows-view-filters-params-list-item">
                            <button className="active">All</button>
                        </li>
                        <li className="shows-view-filters-params-list-item">
                            <button>TV-G</button>
                        </li>
                        <li className="shows-view-filters-params-list-item">
                            <button>TV-PG</button>
                        </li>
                        <li className="shows-view-filters-params-list-item">
                            <button>TV-14</button>
                        </li>
                        <li className="shows-view-filters-params-list-item">
                            <button>TV-MA</button>
                        </li>
                    </ul>
                </div>
                <div className="div-shows-view-filters-params-list-container">
                    <span>Status:</span>
                    <ul className="shows-view-filters-params-list">
                        <li className="shows-view-filters-params-list-item">
                            <button className="active">All</button>
                        </li>
                        <li className="shows-view-filters-params-list-item">
                            <button>Ongoing</button>
                        </li>
                        <li className="shows-view-filters-params-list-item">
                            <button>Ended</button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="div-shows-view-filters-actions-container">
                <div className="div-shows-view-filters-actions-select-container">
                    <select id="sort" name="sort">
                        <option value="default">Sort: Default</option>
                        <option value="year-asc">Oldest First</option>
                        <option value="year-desc">Newest First</option>
                        <option value="title-asc">Title A-Z</option>
                        <option value="title-desc">Title Z-A</option>
                        <option value="seasons-asc">Least Seasons</option>
                        <option value="seasons-desc">Most Seasons</option>
                    </select>
                    <ChevronDown size={14} />
                </div>
                <div className="div-shows-view-filters-actions-layout-container">
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
