// IMPORTED CORE MODULES
import type { ReactElement } from "react";
import { Clapperboard, Play } from "lucide-react";
// IMPORTED CUSTOM MODULES
import type LayoutProps from "./types/LayoutProps";
// IMPORTED STYLESHEETS
import "./css/Layout.css";

const Layout = function ({ movies, selectedLayout }: LayoutProps): ReactElement {
    return (
        <section className="section-movies-view-layout-container">
            <header className="header-movies-view-layout-container">
                {/* <div className="div-header-movies-view-layout-filters-container">
                    <span>Active:</span>
                    <ul className="header-movies-view-layout-filters-list">
                        <li className="header-movies-view-layout-filters-list-item">
                            <span>Name</span>
                            <button>
                                <X size={12} />
                            </button>
                        </li>
                    </ul>
                    <button>Clear All</button>
                </div> */}
                <p>
                    Showing <span>16</span> results.
                </p>
            </header>
            <div className="div-movies-view-layout-list-container">
                {selectedLayout === "grid" ? (
                    <ul className="movies-view-grid-layout-list">
                        {movies.map(({ id, title, details, badges, image }, i) => {
                            return (
                                <li key={id} className="movies-view-grid-layout-list-item" style={{ animationDelay: `${i * 0.04}s` }}>
                                    <div className="div-movies-view-grid-layout-list-item-thumbnail-container">
                                        <ul className="div-movies-view-grid-layout-list-item-thumbnail-container-badges-list">
                                            {badges.map((badge, j) => {
                                                return (
                                                    <li key={j} className="div-movies-view-grid-layout-list-item-thumbnail-container-badges-list-item">
                                                        <span className={badge === "4K" ? "four-k" : badge.toLowerCase()}>{badge}</span>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                        <div className="div-movies-view-grid-layout-list-item-thumbnail">{image ? <img src={image} /> : <Clapperboard size={32} />}</div>
                                        <button>
                                            <Play size={14} />
                                        </button>
                                    </div>
                                    <div className="div-movies-view-grid-layout-list-item-info-container">
                                        <h4>{title}</h4>
                                        <ul className="movies-view-grid-layout-list-item-info-container-details-list">
                                            {details.map((detail, j) => {
                                                return (
                                                    <li key={j} className="movies-view-grid-layout-list-item-info-container-details-list-item">
                                                        <span>{detail}</span>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                ) : (
                    <ul className="movies-view-list-layout-list">
                        {movies.map(({ id, title, details, badges, image }, i) => {
                            return (
                                <li key={id} className="movies-view-list-layout-list-item" style={{ animationDelay: `${i * 0.04}s` }}>
                                    <div className="div-movies-view-list-layout-list-item-thumbnail-container">{image ? <img src={image} /> : <Clapperboard size={32} />}</div>
                                    <div className="div-movies-view-list-layout-list-item-content-container">
                                        <div className="div-movies-view-list-layout-list-item-info-container">
                                            <h4>{title}</h4>
                                            <ul className="movies-view-list-layout-list-item-info-container-details-list">
                                                {details.map((detail, j) => {
                                                    return (
                                                        <li key={j} className="movies-view-list-layout-list-item-info-container-details-list-item">
                                                            <span>{detail}</span>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                            <ul className="div-movies-view-list-layout-list-item-info-container-badges-list">
                                                {badges.map((badge, j) => {
                                                    return (
                                                        <li key={j} className="div-movies-view-list-layout-list-item-info-container-badges-list-item">
                                                            <span className={badge === "4K" ? "four-k" : badge.toLowerCase()}>{badge}</span>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        </div>
                                        <button>
                                            <Play size={18} />
                                        </button>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                )}
            </div>
        </section>
    );
};

export default Layout;
