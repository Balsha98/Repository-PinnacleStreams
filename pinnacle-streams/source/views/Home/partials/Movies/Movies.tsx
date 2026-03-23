// IMPORTED CORE MODULES
import { useState } from "react";
import { ChevronLeft, ChevronRight, Clapperboard, Play } from "lucide-react";
// IMPORTED CUSTOM TYPES
import type Movie from "./types/Movie";
// IMPORTED STYLESHEETS
import "./css/Movies.css";

const MOVIES: Movie[] = [
    {
        id: 1,
        title: "Top Gun: Maverick",
        details: ["2022", "PG-13", "Action", "2h 11m"],
        badges: ["4K", "HDR"],
        image: "http://media.themoviedb.org/t/p/w600_and_h900_face/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
    },
    {
        id: 2,
        title: "Mission: Impossible — Dead Reckoning",
        details: ["2023", "PG-13", "Action", "2h 43m"],
        badges: ["4K", "HDR"],
        image: "https://media.themoviedb.org/t/p/w600_and_h900_face/NNxYkU70HPurnNCSiCjYAmacwm.jpg",
    },
    {
        id: 3,
        title: "Transformers: Rise of the Beasts",
        details: ["2023", "PG-13", "Action", "2h 7m"],
        badges: ["HD"],
        image: "https://media.themoviedb.org/t/p/w600_and_h900_face/gPbM0MK8CP8A174rmUwGsADNYKD.jpg",
    },
    {
        id: 4,
        title: "A Quiet Place: Day One",
        details: ["2024", "PG-13", "Horror", "1h 39m"],
        badges: ["HD", "New"],
        image: "https://media.themoviedb.org/t/p/w600_and_h900_face/hU42CRk14JuPEdqZG3AWmagiPAP.jpg",
    },
    {
        id: 5,
        title: "Dungeons & Dragons: Honor Among Thieves",
        details: ["2023", "PG-13", "Fantasy", "2h 14m"],
        badges: ["HD"],
        image: "https://media.themoviedb.org/t/p/w600_and_h900_face/v7UF7ypAqjsFZFdjksjQ7IUpXdn.jpg",
    },
    {
        id: 6,
        title: "Scream VI",
        details: ["2023", "R", "Horror", "2h 3m"],
        badges: ["HD"],
        image: "https://media.themoviedb.org/t/p/w600_and_h900_face/wDWwtvkRRlgTiUr6TyLSMX8FCuZ.jpg",
    },
    {
        id: 7,
        title: "IF",
        details: ["2024", "PG", "Comedy", "1h 44m"],
        badges: ["HD", "New"],
        image: "https://media.themoviedb.org/t/p/w600_and_h900_face/xbKFv4KF3sVYuWKllLlwWDmuZP7.jpg",
    },
    {
        id: 8,
        title: "Teenage Mutant Ninja Turtles: Mutant Mayhem",
        details: ["2023", "PG", "Animation", "1h 39m"],
        badges: ["HD"],
        image: "https://media.themoviedb.org/t/p/w600_and_h900_face/gyh0eECE2IqrW8GWl3KoHBfc45j.jpg",
    },
    {
        id: 9,
        title: "Interstellar",
        details: ["2014", "PG-13", "Sci-Fi", "2h 49m"],
        badges: ["4K", "HDR"],
        image: "https://media.themoviedb.org/t/p/w600_and_h900_face/yQvGrMoipbRoddT0ZR8tPoR7NfX.jpg",
    },
    {
        id: 10,
        title: "Sonic the Hedgehog 3",
        details: ["2024", "PG", "Adventure", "1h 49m"],
        badges: ["HD", "New"],
        image: "https://media.themoviedb.org/t/p/w600_and_h900_face/d8Ryb8AunYAuycVKDp5HpdWPKgC.jpg",
    },
    {
        id: 11,
        title: "PAW Patrol: The Mighty Movie",
        details: ["2023", "G", "Animation", "1h 28m"],
        badges: ["HD"],
        image: "https://media.themoviedb.org/t/p/w600_and_h900_face/aTvePCU7exLepwg5hWySjwxojQK.jpg",
    },
    {
        id: 12,
        title: "The Iron Claw",
        details: ["2023", "R", "Drama", "2h 12m"],
        badges: ["HD"],
        image: "https://media.themoviedb.org/t/p/w600_and_h900_face/s2VLjcykJfwplJNGT5iEeCA0mRx.jpg",
    },
    {
        id: 13,
        title: "Mean Girls",
        details: ["2024", "PG-13", "Musical", "1h 52m"],
        badges: ["HD", "New"],
        image: "https://media.themoviedb.org/t/p/w600_and_h900_face/2ZkuQXvVhh45uSvkBej4S7Ix1NJ.jpg",
    },
    {
        id: 14,
        title: "Pet Sematary: Bloodlines",
        details: ["2023", "R", "Horror", "1h 27m"],
        badges: ["HD"],
        image: "https://media.themoviedb.org/t/p/w600_and_h900_face/yqnNLn24shYnZ6kqGpbwuB3NJ0D.jpg",
    },
    {
        id: 15,
        title: "Oppenheimer",
        details: ["2023", "R", "Drama", "3h 0m"],
        badges: ["4K", "HDR"],
        image: "https://media.themoviedb.org/t/p/w600_and_h900_face/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    },
    {
        id: 16,
        title: "Gladiator II",
        details: ["2024", "R", "Action", "2h 28m"],
        badges: ["4K", "New"],
        image: "https://media.themoviedb.org/t/p/w600_and_h900_face/2cxhvwyEwRlysAmRH4iodkvo0z5.jpg",
    },
];

const Movies = function () {
    const [currentItemIndex, setCurrentItemIndex] = useState(0);

    const maxItemIndex = MOVIES.length - 1;

    const handleItemsIteration = function (e: any) {
        const { target } = e;

        const button = target.closest("button");

        const direction = +button.dataset.direction;

        setCurrentItemIndex((v) => (direction < 0 ? --v : ++v));
    };

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
                {currentItemIndex * -1 < maxItemIndex && (
                    <button onClick={handleItemsIteration} data-direction="-1">
                        <ChevronLeft size={16} />
                    </button>
                )}
                <ul className="section-movies-container-list">
                    {MOVIES.map(({ id, title, details, badges, image }) => {
                        return (
                            <li key={id} className="section-movies-container-list-item" style={{ transform: `translateX(calc(${currentItemIndex} * (100% + 16px)))` }}>
                                <div className="div-section-movies-container-list-item-thumbnail-container">
                                    <ul className="div-section-movies-container-list-item-thumbnail-container-badges-list">
                                        {badges.map((badge, j) => {
                                            return (
                                                <li key={j} className="div-section-movies-container-list-item-thumbnail-container-badges-list-item">
                                                    <span className={badge === "4K" ? "four-k" : badge.toLowerCase()}>{badge}</span>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                    <div className="div-section-movies-container-list-item-thumbnail">{image ? <img src={image} /> : <Clapperboard size={32} />}</div>
                                    <button>
                                        <Play size={14} />
                                    </button>
                                </div>
                                <div className="div-section-movies-container-list-item-info-container">
                                    <h4>{title}</h4>
                                    <ul className="section-movies-container-list-item-info-container-details-list">
                                        {details.map((detail, j) => {
                                            return (
                                                <li key={j} className="section-movies-container-list-item-info-container-details-list-item">
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
                {currentItemIndex !== 0 && (
                    <button onClick={handleItemsIteration} data-direction="1">
                        <ChevronRight size={16} />
                    </button>
                )}
            </div>
        </section>
    );
};

export default Movies;
