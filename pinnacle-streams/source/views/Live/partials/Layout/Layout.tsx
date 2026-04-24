// IMPORTED CORE MODULES
import type { ReactElement } from "react";
import { Play, TvMinimal } from "lucide-react";
// IMPORTED CUSTOM MODULES
import type LayoutProps from "./types/LayoutProps";
// IMPORTED STYLESHEETS
import "./css/Layout.css";

const Layout = function ({ live }: LayoutProps): ReactElement {
    return (
        <section className="section-live-view-layout-container">
            <header className="header-live-view-layout-container">
                {/* <div className="div-header-live-view-layout-filters-container">
                    <span>Active:</span>
                    <ul className="header-live-view-layout-filters-list">
                        <li className="header-live-view-layout-filters-list-item">
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
            <div className="div-live-views-layout-list-container">
                <ul className="live-view-grid-layout-list">
                    {live.map(({ channel, title, description, progress }, i) => {
                        return (
                            <li key={i} className="live-view-grid-layout-list-item">
                                <div className="div-live-view-grid-layout-list-item-thumbnail-container">
                                    <div className="div-live-view-grid-layout-list-item-thumbnail-indicator-container">
                                        <span>&nbsp;</span>
                                        <span>Live</span>
                                    </div>
                                    <div className="div-live-view-grid-layout-list-item-thumbnail">
                                        <TvMinimal size={48} />
                                    </div>
                                    <button>
                                        <Play size={14} />
                                    </button>
                                </div>
                                <div className="div-live-view-grid-layout-list-item-info-container">
                                    <header className="header-live-view-grid-layout-list-item-info-container">
                                        <span>{channel}</span>
                                        <h4>{title}</h4>
                                    </header>
                                    <p>{description}</p>
                                    <div className="div-live-view-grid-layout-list-item-info-progress-track-container">
                                        <div className="div-live-view-grid-layout-list-item-info-progress-thumb" style={{ width: `${progress}%` }}>
                                            &nbsp;
                                        </div>
                                    </div>
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
