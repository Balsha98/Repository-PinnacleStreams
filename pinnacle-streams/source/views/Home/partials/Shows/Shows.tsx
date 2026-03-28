// IMPORTED CORE MODULES
import { useState, type MouseEvent } from "react";
import { ChevronLeft, ChevronRight, Clapperboard, Play } from "lucide-react";
// IMPORTED CUSTOM TYPES
import type Show from "./types/Show";
// IMPORTED STYLESHEETS
import "./css/Shows.css";

const SHOWS: Show[] = [
    {
        id: 1,
        title: "Yellowstone",
        details: ["2018", "TV-MA", "Drama", "5 Seasons"],
        badges: ["HD"],
        image: "https://media.themoviedb.org/t/p/w600_and_h900_face/vOYfRZ0NpUK5hG2CB2dJFnYJlGe.jpg",
    },
    {
        id: 2,
        title: "Tulsa King",
        details: ["2022", "TV-MA", "Crime", "2 Seasons"],
        badges: ["HD", "New"],
        image: "https://media.themoviedb.org/t/p/w600_and_h900_face/rOYLWCdAifpUtPlTf1WHxyaxeMt.jpg",
    },
    {
        id: 3,
        title: "Star Trek: Strange New Worlds",
        details: ["2022", "TV-14", "Sci-Fi", "3 Seasons"],
        badges: ["4K", "New"],
        image: "https://media.themoviedb.org/t/p/w600_and_h900_face/w6KapI2JvrCkOPmQhkwYPJNjqeo.jpg",
    },
    {
        id: 4,
        title: "The Good Fight",
        details: ["2017", "TV-MA", "Legal Drama", "6 Seasons"],
        badges: ["HD"],
        image: "https://media.themoviedb.org/t/p/w600_and_h900_face/8qoOHOfbUbrCcHZnDVxGcwOWinV.jpg",
    },
    {
        id: 5,
        title: "Halo",
        details: ["2022", "TV-MA", "Sci-Fi", "2 Seasons"],
        badges: ["4K"],
        image: "https://media.themoviedb.org/t/p/w600_and_h900_face/4UmNhZCEu8Vt3byMvNxNEPyf8EY.jpg",
    },
    {
        id: 6,
        title: "Lioness",
        details: ["2023", "TV-MA", "Action", "2 Seasons"],
        badges: ["HD", "New"],
        image: "https://media.themoviedb.org/t/p/w600_and_h900_face/ajaXSmdAlYYhnvx1EIsvpfN949y.jpg",
    },
    {
        id: 7,
        title: "Mayor of Kingstown",
        details: ["2021", "TV-MA", "Crime", "3 Seasons"],
        badges: ["HD"],
        image: "https://media.themoviedb.org/t/p/w600_and_h900_face/6rWIip9MZELAA0SKii5WqsBDCYW.jpg",
    },
    {
        id: 8,
        title: "Star Trek: Discovery",
        details: ["2017", "TV-14", "Sci-Fi", "5 Seasons"],
        badges: ["4K"],
        image: "https://media.themoviedb.org/t/p/w600_and_h900_face/xwpOHgym48Ftz7fbJq5te5xoiwu.jpg",
    },
    {
        id: 9,
        title: "1923",
        details: ["2022", "TV-MA", "Drama", "2 Seasons"],
        badges: ["HD", "Original"],
        image: "https://media.themoviedb.org/t/p/w600_and_h900_face/zgZRJZvZn5cpsWAB0zMUdad3iZd.jpg",
    },
    {
        id: 10,
        title: "1883",
        details: ["2021", "TV-MA", "Western", "1 Season"],
        badges: ["HD", "Original"],
        image: "https://media.themoviedb.org/t/p/w600_and_h900_face/waLbm384SQDwLTCn6ttPqQS5kfV.jpg",
    },
    {
        id: 11,
        title: "The Offer",
        details: ["2022", "TV-MA", "Drama", "1 Season"],
        badges: ["HD"],
        image: "https://media.themoviedb.org/t/p/w600_and_h900_face/9fdYX5uc3HZEuYotms3XJ72AbCr.jpg",
    },
    {
        id: 12,
        title: "Star Trek: Picard",
        details: ["2020", "TV-14", "Sci-Fi", "3 Seasons"],
        badges: ["4K"],
        image: "https://media.themoviedb.org/t/p/w600_and_h900_face/nIlAKIrLKxOeoEnc0Urb65yNCp.jpg",
    },
    {
        id: 13,
        title: "Evil",
        details: ["2019", "TV-MA", "Supernatural", "4 Seasons"],
        badges: ["HD"],
        image: "https://media.themoviedb.org/t/p/w600_and_h900_face/auRAAVxlyT6YACql96UdtnpFHy3.jpg",
    },
    {
        id: 14,
        title: "Seal Team",
        details: ["2017", "TV-14", "Action", "7 Seasons"],
        badges: ["HD"],
        image: "https://media.themoviedb.org/t/p/w600_and_h900_face/6iSnec83UEMgLOXAtGYwaVNHLjR.jpg",
    },
    {
        id: 15,
        title: "iCarly",
        details: ["2021", "TV-14", "Comedy", "3 Seasons"],
        badges: ["HD"],
        image: "https://media.themoviedb.org/t/p/w600_and_h900_face/tM4P2RNIIFzFJi7UngNVB80sRCp.jpg",
    },
    {
        id: 16,
        title: "Grease: Rise of the Pink Ladies",
        details: ["2023", "TV-14", "Musical", "1 Season"],
        badges: ["HD"],
        image: "https://media.themoviedb.org/t/p/w600_and_h900_face/dGu8u5F9Cjn9Ij2aMYtGmKHp5m1.jpg",
    },
];

const Shows = function () {
    const [currentItemIndex, setCurrentItemIndex] = useState<number>(0);

    const maxItemIndex: number = SHOWS.length - 1;

    const handleItemsIteration = function (e: MouseEvent<HTMLElement>): void {
        const { target } = e;

        const button = (target as HTMLElement).closest("button");

        // Guard clause.
        if (!button) return;

        const direction = button.dataset.direction;

        // Guard clause.
        if (!direction) return;

        setCurrentItemIndex((v) => (+direction < 0 ? --v : ++v));
    };

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
                {currentItemIndex * -1 < maxItemIndex && (
                    <button onClick={handleItemsIteration} data-direction="-1">
                        <ChevronLeft size={16} />
                    </button>
                )}
                <ul className="section-shows-container-list">
                    {SHOWS.map(({ id, title, details, badges, image }) => {
                        return (
                            <li key={id} className="section-shows-container-list-item" style={{ transform: `translateX(calc(${currentItemIndex} * (100% + 16px)))` }}>
                                <div className="div-section-shows-container-list-item-thumbnail-container">
                                    <ul className="div-section-shows-container-list-item-thumbnail-container-badges-list">
                                        {badges.map((badge, j) => {
                                            return (
                                                <li key={j} className="div-section-shows-container-list-item-thumbnail-container-badges-list-item">
                                                    <span className={badge === "4K" ? "four-k" : badge.toLowerCase()}>{badge}</span>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                    <div className="div-section-shows-container-list-item-thumbnail">{image ? <img src={image} /> : <Clapperboard size={32} />}</div>
                                    <button>
                                        <Play size={14} />
                                    </button>
                                </div>
                                <div className="div-section-shows-container-list-item-info-container">
                                    <h4>{title}</h4>
                                    <ul className="section-shows-container-list-item-info-container-details-list">
                                        {details.map((detail, j) => {
                                            return (
                                                <li key={j} className="section-shows-container-list-item-info-container-details-list-item">
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

export default Shows;
