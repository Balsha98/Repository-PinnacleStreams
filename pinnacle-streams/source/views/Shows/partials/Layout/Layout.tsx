// IMPORTED CORE MODULES
import type { ReactElement } from "react";
import { Circle, Clapperboard, Play } from "lucide-react";
// IMPORTED CUSTOM MODULES
import type LayoutProps from "./types/LayoutProps";
// IMPORTED STYLESHEETS
import "./css/Layout.css";

const Layout = function ({ shows }: LayoutProps): ReactElement {
    return (
        <section className="section-shows-view-layout-container">
            <header className="header-shows-view-layout-container">
                {/* <div className="div-header-shows-view-layout-filters-container">
                    <span>Active:</span>
                    <ul className="header-shows-view-layout-filters-list">
                        <li className="header-shows-view-layout-filters-list-item">
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
            <div className="div-shows-views-layout-list-container">
                {/* <ul className="shows-view-grid-layout-list">
                    {shows.map(({ id, title, details, badges, image, status }, i) => {
                        return (
                            <li key={id} className="shows-view-grid-layout-list-item" style={{ animationDelay: `${i * 0.04}s` }}>
                                <div className="div-shows-view-grid-layout-list-item-thumbnail-container">
                                    <ul className="div-shows-view-grid-layout-list-item-thumbnail-container-badges-list">
                                        {badges.map((badge, j) => {
                                            return (
                                                <li key={j} className="div-shows-view-grid-layout-list-item-thumbnail-container-badges-list-item">
                                                    <span className={badge === "4K" ? "four-k" : badge.toLowerCase()}>{badge}</span>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                    <div className="div-shows-view-grid-layout-list-item-thumbnail">{image ? <img src={image} /> : <Clapperboard size={32} />}</div>
                                    <button>
                                        <Play size={14} />
                                    </button>
                                </div>
                                <div className="div-shows-view-grid-layout-list-item-info-container">
                                    <h4>{title}</h4>
                                    <ul className="shows-view-grid-layout-list-item-info-container-details-list">
                                        {details.map((detail, j) => {
                                            return (
                                                <li key={j} className="shows-view-grid-layout-list-item-info-container-details-list-item">
                                                    <span>{detail}</span>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                    <div className={`div-shows-view-grid-layout-list-item-status-container ${status.toLowerCase()}`}>
                                        <Circle size={8} />
                                        <span>{status}</span>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul> */}
                <ul className="shows-view-list-layout-list">
                    {shows.map(({ id, title, details, badges, image, status }, i) => {
                        return (
                            <li key={id} className="shows-view-list-layout-list-item" style={{ animationDelay: `${i * 0.04}s` }}>
                                <div className="div-shows-view-list-layout-list-item-thumbnail-container">{image ? <img src={image} /> : <Clapperboard size={32} />}</div>
                                <div className="div-shows-view-list-layout-list-item-content-container">
                                    <div className="div-shows-view-list-layout-list-item-info-container">
                                        <h4>{title}</h4>
                                        <ul className="shows-view-list-layout-list-item-info-container-details-list">
                                            {details.map((detail, j) => {
                                                return (
                                                    <li key={j} className="shows-view-list-layout-list-item-info-container-details-list-item">
                                                        <span>{detail}</span>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                        <ul className="div-shows-view-list-layout-list-item-info-container-badges-list">
                                            {badges.map((badge, j) => {
                                                return (
                                                    <li key={j} className="div-shows-view-list-layout-list-item-info-container-badges-list-item">
                                                        <span className={badge === "4K" ? "four-k" : badge.toLowerCase()}>{badge}</span>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                    <div className={`div-shows-view-list-layout-list-item-status-container ${status.toLowerCase()}`}>
                                        <Circle size={12} />
                                        <span>{status}</span>
                                    </div>
                                    <button>
                                        <Play size={18} />
                                    </button>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
};

export default Layout;
