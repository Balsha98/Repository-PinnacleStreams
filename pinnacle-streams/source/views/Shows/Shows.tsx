// IMPORTED CORE MODULES
import { useEffect, useState, type MouseEvent, type ReactElement } from "react";
// IMPORTED CUSTOM TYPES
import type Show from "./types/Show";
// IMPORTED STYLESHEETS
import "./css/Shows.css";
// IMPORTED CUSTOM MODULES
import Nav from "../../partials/Nav/Nav";
import Header from "./partials/Header/Header";
import Filters from "./partials/Filters/Filters";
import Layout from "./partials/Layout/Layout";
import Footer from "../../partials/Footer/Footer";

const SHOWS: Show[] = [
    {
        id: 1,
        title: "Yellowstone",
        details: ["2018", "TV-MA", "Drama", "5 Seasons"],
        badges: ["HD"],
        image: "https://media.themoviedb.org/t/p/w600_and_h900_face/vOYfRZ0NpUK5hG2CB2dJFnYJlGe.jpg",
        status: "Ended",
    },
    {
        id: 2,
        title: "Tulsa King",
        details: ["2022", "TV-MA", "Crime", "2 Seasons"],
        badges: ["HD", "New"],
        image: "https://media.themoviedb.org/t/p/w600_and_h900_face/rOYLWCdAifpUtPlTf1WHxyaxeMt.jpg",
        status: "Ongoing",
    },
    {
        id: 3,
        title: "Star Trek: Strange New Worlds",
        details: ["2022", "TV-14", "Sci-Fi", "3 Seasons"],
        badges: ["4K", "New"],
        image: "https://media.themoviedb.org/t/p/w600_and_h900_face/w6KapI2JvrCkOPmQhkwYPJNjqeo.jpg",
        status: "Ongoing",
    },
    {
        id: 4,
        title: "The Good Fight",
        details: ["2017", "TV-MA", "Legal Drama", "6 Seasons"],
        badges: ["HD"],
        image: "https://media.themoviedb.org/t/p/w600_and_h900_face/8qoOHOfbUbrCcHZnDVxGcwOWinV.jpg",
        status: "Ended",
    },
    {
        id: 5,
        title: "Halo",
        details: ["2022", "TV-MA", "Sci-Fi", "2 Seasons"],
        badges: ["4K"],
        image: "https://media.themoviedb.org/t/p/w600_and_h900_face/4UmNhZCEu8Vt3byMvNxNEPyf8EY.jpg",
        status: "Ongoing",
    },
    {
        id: 6,
        title: "Lioness",
        details: ["2023", "TV-MA", "Action", "2 Seasons"],
        badges: ["HD", "New"],
        image: "https://media.themoviedb.org/t/p/w600_and_h900_face/ajaXSmdAlYYhnvx1EIsvpfN949y.jpg",
        status: "Ongoing",
    },
    {
        id: 7,
        title: "Mayor of Kingstown",
        details: ["2021", "TV-MA", "Crime", "3 Seasons"],
        badges: ["HD"],
        image: "https://media.themoviedb.org/t/p/w600_and_h900_face/6rWIip9MZELAA0SKii5WqsBDCYW.jpg",
        status: "Ongoing",
    },
    {
        id: 8,
        title: "Star Trek: Discovery",
        details: ["2017", "TV-14", "Sci-Fi", "5 Seasons"],
        badges: ["4K"],
        image: "https://media.themoviedb.org/t/p/w600_and_h900_face/xwpOHgym48Ftz7fbJq5te5xoiwu.jpg",
        status: "Ended",
    },
    {
        id: 9,
        title: "1923",
        details: ["2022", "TV-MA", "Drama", "2 Seasons"],
        badges: ["HD", "Original"],
        image: "https://media.themoviedb.org/t/p/w600_and_h900_face/zgZRJZvZn5cpsWAB0zMUdad3iZd.jpg",
        status: "Ended",
    },
    {
        id: 10,
        title: "1883",
        details: ["2021", "TV-MA", "Western", "1 Season"],
        badges: ["HD", "Original"],
        image: "https://media.themoviedb.org/t/p/w600_and_h900_face/waLbm384SQDwLTCn6ttPqQS5kfV.jpg",
        status: "Ended",
    },
    {
        id: 11,
        title: "The Offer",
        details: ["2022", "TV-MA", "Drama", "1 Season"],
        badges: ["HD"],
        image: "https://media.themoviedb.org/t/p/w600_and_h900_face/9fdYX5uc3HZEuYotms3XJ72AbCr.jpg",
        status: "Ended",
    },
    {
        id: 12,
        title: "Star Trek: Picard",
        details: ["2020", "TV-14", "Sci-Fi", "3 Seasons"],
        badges: ["4K"],
        image: "https://media.themoviedb.org/t/p/w600_and_h900_face/nIlAKIrLKxOeoEnc0Urb65yNCp.jpg",
        status: "Ended",
    },
    {
        id: 13,
        title: "Evil",
        details: ["2019", "TV-MA", "Supernatural", "4 Seasons"],
        badges: ["HD"],
        image: "https://media.themoviedb.org/t/p/w600_and_h900_face/auRAAVxlyT6YACql96UdtnpFHy3.jpg",
        status: "Ended",
    },
    {
        id: 14,
        title: "Seal Team",
        details: ["2017", "TV-14", "Action", "7 Seasons"],
        badges: ["HD"],
        image: "https://media.themoviedb.org/t/p/w600_and_h900_face/6iSnec83UEMgLOXAtGYwaVNHLjR.jpg",
        status: "Ended",
    },
    {
        id: 15,
        title: "iCarly",
        details: ["2021", "TV-14", "Comedy", "3 Seasons"],
        badges: ["HD"],
        image: "https://media.themoviedb.org/t/p/w600_and_h900_face/tM4P2RNIIFzFJi7UngNVB80sRCp.jpg",
        status: "Ended",
    },
    {
        id: 16,
        title: "Grease: Rise of the Pink Ladies",
        details: ["2023", "TV-14", "Musical", "1 Season"],
        badges: ["HD"],
        image: "https://media.themoviedb.org/t/p/w600_and_h900_face/dGu8u5F9Cjn9Ij2aMYtGmKHp5m1.jpg",
        status: "Ended",
    },
];

const Movies = function (): ReactElement {
    const [selectedLayout, setSelectedLayout] = useState<string>("grid");

    const handleSetSelectedLayout = function (e: MouseEvent<HTMLElement>): void {
        const { target } = e;

        const btn = (target as HTMLElement).closest("button");

        // Guard clause.
        if (!btn) return;

        const layout = btn.dataset.layout;

        // Guard clause.
        if (!layout) return;

        setSelectedLayout(layout);
    };

    useEffect(() => {
        document.title = "Paramount Streams | TV Shows";
    }, []);

    return (
        <>
            <Nav isMainNav={false} />
            <div className="div-main-edge-container">
                <Header />
                <Filters selectedLayout={selectedLayout} onToggleSelectedLayout={handleSetSelectedLayout} />
                <Layout shows={SHOWS} selectedLayout={selectedLayout} />
                <Footer />
            </div>
        </>
    );
};

export default Movies;
