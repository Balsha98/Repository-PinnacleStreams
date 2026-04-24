// IMPORTED CORE MODULES
import type { ReactElement } from "react";
import { ArrowRight, Mountain } from "lucide-react";
// IMPORTED CUSTOM MODULES
import type LayoutProps from "./types/LayoutProps";
// IMPORTED STYLESHEETS
import "./css/Layout.css";

const Layout = function ({ news }: LayoutProps): ReactElement {
    return (
        <div className="div-main-edge-container">
            <section className="section-news-view-layout-container">
                <header className="header-news-view-layout-container">
                    {/* <div className="div-header-news-view-layout-filters-container">
                    <span>Active:</span>
                    <ul className="header-news-view-layout-filters-list">
                        <li className="header-news-view-layout-filters-list-item">
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
                <div className="div-news-view-layout-list-container">
                    <ul className="news-view-grid-layout-list">
                        {news.map(({ title, excerpt, category, author, initials, date, readTime }, i) => {
                            const categoryStyle = category.split(" ").join("-").toLowerCase();

                            return (
                                <li key={i} className="news-view-grid-layout-list-item">
                                    <div className="div-news-view-grid-layout-list-item-thumbnail-container">
                                        <div className={`div-news-view-grid-layout-list-item-thumbnail-category-container ${categoryStyle}`}>
                                            <span>{category}</span>
                                        </div>
                                        <div className="div-news-view-grid-layout-list-item-thumbnail">
                                            <Mountain size={48} />
                                        </div>
                                    </div>
                                    <div className="div-news-view-grid-layout-list-item-info-container">
                                        <header className="header-news-view-grid-layout-list-item-info-container">
                                            <h4>{title}</h4>
                                            <p>{excerpt}</p>
                                        </header>
                                        <footer className="footer-news-view-grid-layout-list-item-info-container">
                                            <div className="div-footer-news-view-grid-layout-list-item-info-content-container">
                                                <div className="div-footer-news-view-grid-layout-list-item-info-content-initials-container">
                                                    <span>{initials}</span>
                                                </div>
                                                <div className="div-footer-news-view-grid-layout-list-item-info-content-author-container">
                                                    <p>{author}</p>
                                                    <ul className="footer-news-view-grid-layout-list-item-info-content-author-details-list">
                                                        <li className="footer-news-view-grid-layout-list-item-info-content-author-details-list-item">
                                                            <span>{date}</span>
                                                        </li>
                                                        <li className="footer-news-view-grid-layout-list-item-info-content-author-details-list-item">
                                                            <span>{readTime}</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <a href="#">
                                                <span>Read More</span>
                                                <ArrowRight size={14} />
                                            </a>
                                        </footer>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default Layout;
