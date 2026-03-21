// IMPORTED CORE MODULES
import { ChevronLeft, ChevronRight, Clapperboard, Play } from "lucide-react";
// IMPORTED STYLESHEETS
import "./css/Shows.css";

const Shows = function () {
    return (
        <section className="section-shows-container">
            <header className="header-section-shows-container">
                <h2>
                    Top <span>Shows</span>
                </h2>
                <a href="/movies">
                    <span>Browse All</span>
                    <ChevronRight size={16} />
                </a>
            </header>
            <div className="div-section-shows-container-list-container">
                <button>
                    <ChevronLeft size={16} />
                </button>
                <ul className="section-shows-container-list">
                    <li className="section-shows-container-list-item">
                        <div className="div-section-shows-container-list-item-thumbnail-container">
                            <span>4K</span>
                            <div className="div-section-shows-container-list-item-thumbnail">
                                <Clapperboard size={32} />
                            </div>
                            <button>
                                <Play size={14} />
                            </button>
                        </div>
                        <div className="div-section-shows-container-list-item-info-container">
                            <h4>Yellowstone</h4>
                            <ul className="section-shows-container-list-item-info-container-details-list">
                                <li className="section-shows-container-list-item-info-container-details-list-item">
                                    <span>2018</span>
                                </li>
                                <li className="section-shows-container-list-item-info-container-details-list-item">
                                    <span>TV-MA</span>
                                </li>
                                <li className="section-shows-container-list-item-info-container-details-list-item">
                                    <span>Drama</span>
                                </li>
                                <li className="section-shows-container-list-item-info-container-details-list-item">
                                    <span>5 Seasons</span>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="section-shows-container-list-item">
                        <div className="div-section-shows-container-list-item-thumbnail-container">
                            <span>4K</span>
                            <div className="div-section-shows-container-list-item-thumbnail">
                                <Clapperboard size={32} />
                            </div>
                            <button>
                                <Play size={14} />
                            </button>
                        </div>
                        <div className="div-section-shows-container-list-item-info-container">
                            <h4>Tulsa King</h4>
                            <ul className="section-shows-container-list-item-info-container-details-list">
                                <li className="section-shows-container-list-item-info-container-details-list-item">
                                    <span>2022</span>
                                </li>
                                <li className="section-shows-container-list-item-info-container-details-list-item">
                                    <span>TV-MA</span>
                                </li>
                                <li className="section-shows-container-list-item-info-container-details-list-item">
                                    <span>Crime</span>
                                </li>
                                <li className="section-shows-container-list-item-info-container-details-list-item">
                                    <span>2 Seasons</span>
                                </li>
                            </ul>
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

export default Shows;
