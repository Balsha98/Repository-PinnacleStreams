// IMPORTED CORE MODULES
import { ChevronLeft, ChevronRight, Clapperboard } from "lucide-react";
// IMPORTED STYLESHEETS
import "./css/Live.css";

const Live = function () {
    return (
        <section className="section-live-container">
            <header className="header-section-live-container">
                <h2>
                    <span>Live</span> TV
                </h2>
                <a href="/movies">
                    <span>View Guide</span>
                    <ChevronRight size={16} />
                </a>
            </header>
            <div className="div-section-live-container-list-container">
                <button>
                    <ChevronLeft size={16} />
                </button>
                <ul className="section-live-container-list">
                    <li className="section-live-container-list-item">
                        <div className="div-section-live-container-list-item-thumbnail-container">
                            <div className="div-section-live-container-list-item-thumbnail-indicator-container">
                                <span>&nbsp;</span>
                                <span>Live</span>
                            </div>
                            <div className="div-section-live-container-list-item-thumbnail">
                                <Clapperboard size={32} />
                            </div>
                        </div>
                        <div className="div-section-live-container-list-item-info-container">
                            <header className="header-section-live-container-list-item-info-container">
                                <span>CBS</span>
                                <h4>NFL on CBS</h4>
                            </header>
                            <p>Kansas City Chief vs. San Francisco 49ers</p>
                            <div className="div-section-live-container-list-item-info-progress-track-container">
                                <div className="div-section-live-container-list-item-info-progress-thumb">&nbsp;</div>
                            </div>
                        </div>
                    </li>
                    <li className="section-live-container-list-item">
                        <div className="div-section-live-container-list-item-thumbnail-container">
                            <div className="div-section-live-container-list-item-thumbnail-indicator-container">
                                <span>&nbsp;</span>
                                <span>Live</span>
                            </div>
                            <div className="div-section-live-container-list-item-thumbnail">
                                <Clapperboard size={32} />
                            </div>
                        </div>
                        <div className="div-section-live-container-list-item-info-container">
                            <header className="header-section-live-container-list-item-info-container">
                                <span>CBS</span>
                                <h4>NFL on CBS</h4>
                            </header>
                            <p>Kansas City Chief vs. San Francisco 49ers</p>
                            <div className="div-section-live-container-list-item-info-progress-track-container">
                                <div className="div-section-live-container-list-item-info-progress-thumb">&nbsp;</div>
                            </div>
                        </div>
                    </li>
                </ul>
                <button>
                    <ChevronRight size={16} />
                </button>
            </div>
        </section>
    );
};

export default Live;
