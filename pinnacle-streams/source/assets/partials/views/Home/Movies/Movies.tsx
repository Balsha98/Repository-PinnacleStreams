// IMPORTED CORE MODULES
import { ChevronLeft, ChevronRight, Clapperboard, Play } from "lucide-react";
// IMPORTED STYLESHEETS
import "./css/Movies.css";

const Movies = function () {
    return (
        <section className="section-movies-container">
            <header className="header-section-movies-container">
                <h2>
                    Top <span>Movies</span>
                </h2>
                <a href="/movies">
                    <span>Browse All</span>
                    <ChevronRight size={16} />
                </a>
            </header>
            <div className="div-section-movies-container-list-container">
                <button>
                    <ChevronLeft size={16} />
                </button>
                <ul className="section-movies-container-list">
                    <li className="section-movies-container-list-item">
                        <div className="div-section-movies-container-list-item-thumbnail-container">
                            <span>4K</span>
                            <div className="div-section-movies-container-list-item-thumbnail">
                                <Clapperboard size={32} />
                            </div>
                            <button>
                                <Play size={14} />
                            </button>
                        </div>
                        <div className="div-section-movies-container-list-item-info-container">
                            <h4>Mission Impossible 7</h4>
                            <ul className="section-movies-container-list-item-info-container-details-list">
                                <li className="section-movies-container-list-item-info-container-details-list-item">
                                    <span>2023</span>
                                </li>
                                <li className="section-movies-container-list-item-info-container-details-list-item">
                                    <span>PG-13</span>
                                </li>
                                <li className="section-movies-container-list-item-info-container-details-list-item">
                                    <span>2h 43m</span>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="section-movies-container-list-item">
                        <div className="div-section-movies-container-list-item-thumbnail-container">
                            <span>4K</span>
                            <div className="div-section-movies-container-list-item-thumbnail">
                                <Clapperboard size={32} />
                            </div>
                            <button>
                                <Play size={14} />
                            </button>
                        </div>
                        <div className="div-section-movies-container-list-item-info-container">
                            <h4>Mission Impossible 7</h4>
                            <ul className="section-movies-container-list-item-info-container-details-list">
                                <li className="section-movies-container-list-item-info-container-details-list-item">
                                    <span>2023</span>
                                </li>
                                <li className="section-movies-container-list-item-info-container-details-list-item">
                                    <span>PG-13</span>
                                </li>
                                <li className="section-movies-container-list-item-info-container-details-list-item">
                                    <span>2h 43m</span>
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

export default Movies;
