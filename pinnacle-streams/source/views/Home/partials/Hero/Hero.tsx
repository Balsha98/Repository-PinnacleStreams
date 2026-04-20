// IMPORTED CORE MODULES
import { useEffect, useState, type MouseEvent } from "react";
import { Link } from "react-router-dom";
import { Info, Play, Star, Zap } from "lucide-react";
// IMPORTED CUSTOM TYPES
import type Item from "./types/Item";
// IMPORTED STYLESHEETS
import "./css/Hero.css";

const ITEMS: Item[] = [
    {
        id: 1,
        title: "Yellowstone",
        description: "A multigenerational family of ranchers fight to maintain control of their vast land against those encroaching upon it, including land developers and a neighboring Native American reservation.",
        rating: 8.7,
        details: ["2018", "TV-MA", "Drama", "5 Seasons"],
        badges: ["New Season Now Streaming"],
        image: "https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/ynSOcgDLZfdLCZfRSYZGiTgYJVo.jpg",
    },
    {
        id: 2,
        title: "Tulsa King",
        description: "A New York mafia capo is unexpectedly exiled by his boss to set up operations in Tulsa, Oklahoma, where he must build a criminal empire from scratch in unfamiliar territory.",
        rating: 8.1,
        details: ["2022", "TV-MA", "Crime", "2 Seasons"],
        badges: ["New Season Now Streaming"],
        image: "https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/mNHRGO1gFpR2CYZdANe72kcKq7G.jpg",
    },
    {
        id: 3,
        title: "Star Trek: Strange New Worlds",
        description: "Follows Captain Christopher Pike and the crew of the USS Enterprise as they explore uncharted regions of the galaxy, encountering new worlds and civilizations on episodic adventures.",
        rating: 7.9,
        details: ["2022", "TV-14", "Sci-Fi", "3 Seasons"],
        badges: ["New Season Now Streaming"],
        image: "https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/fZJs6xgU9dqIg9phIXjZAZOInzy.jpg",
    },
    {
        id: 4,
        title: "The Good Fight",
        description: "Diane Lockhart is forced to start over after a financial scandal destroys her reputation, joining a prestigious Chicago law firm while navigating a turbulent legal and political landscape.",
        rating: 8.0,
        details: ["2017", "TV-MA", "Legal Drama", "6 Seasons"],
        badges: ["New Season Now Streaming"],
        image: "https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/nz6vpYyN1pEwBYeoAVIu2316d0z.jpg",
    },
    {
        id: 5,
        title: "Halo",
        description: "Set in the 26th century, the series dramatizes an epic conflict between humanity and an alien threat known as the Covenant, following the legendary supersoldier Master Chief at the center of the war.",
        rating: 6.9,
        details: ["2022", "TV-MA", "Sci-Fi", "2 Seasons"],
        badges: ["New Season Now Streaming"],
        image: "https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/zW0v2YT74C6tRafzqqBkfSqLAN0.jpg",
    },
];

const Hero = function () {
    const [currentItemId, setCurrentItemId] = useState<number>(1);

    const handleCarouselPagination = function (e: MouseEvent<HTMLElement>): void {
        const { target } = e;

        const btn = (target as HTMLElement).closest("button");

        // Guard clause.
        if (!btn) return;

        const id = btn.dataset.id;

        // Guard clause.
        if (!id) return;

        setCurrentItemId(+id);
    };

    useEffect(() => {
        const handleCarouselInterval = (): void => {
            const maxId: number = ITEMS.length;

            console.log(currentItemId);

            if (currentItemId === maxId) return setCurrentItemId(1);

            setCurrentItemId((v) => v + 1);
        };

        const carouselInterval = setInterval(handleCarouselInterval, 5000);

        return () => clearInterval(carouselInterval);
    }, [currentItemId, setCurrentItemId]);

    return (
        <div className="div-home-view-hero-container">
            <ul className="home-view-hero-container-items-list">
                {ITEMS.map(({ id, title, description, rating, details, badges, image }) => {
                    const badge: string = badges[0];
                    const season: number = +details[details.length - 1].split(" ")[0];

                    return (
                        <li key={id} className={`home-view-hero-container-items-list-item${id !== currentItemId ? " hidden" : ""}`} style={{ backgroundImage: `url(${image})` }}>
                            <div className="div-main-edge-container">
                                <header className="header-home-view-hero-container">
                                    <div className="div-header-home-view-hero-icon-container">
                                        <Zap size={16} />
                                        <span>{badge}</span>
                                    </div>
                                    <div className="div-header-home-view-hero-info-container">
                                        <h2>{title}</h2>
                                        <span>Season {season}</span>
                                    </div>
                                </header>
                                <div className="div-home-view-hero-content-container">
                                    <div className="div-home-view-hero-content-info-container">
                                        <ul className="home-view-hero-content-details-list">
                                            <li className="home-view-hero-content-details-list-item">
                                                <Star size={14} />
                                                <span>{rating}</span>
                                            </li>
                                            {details.map((detail, i) => (
                                                <li key={i} className="home-view-hero-content-details-list-item">
                                                    <span>{detail}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <p>{description}</p>
                                    </div>
                                    <div className="div-home-view-hero-content-actions-container">
                                        <Link to="">
                                            <Play size={16} />
                                            <span>Watch Now</span>
                                        </Link>
                                        <Link to="">
                                            <Info size={16} />
                                            <span>More Info</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
            <div className="div-main-edge-container">
                <ul className="home-view-hero-container-pagination-btns-list">
                    {ITEMS.map(({ id }) => {
                        return (
                            <li key={id} className={`home-view-hero-container-pagination-btns-list-item${id === currentItemId ? " active" : ""}`}>
                                <button onClick={handleCarouselPagination} data-id={id} />
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Hero;
