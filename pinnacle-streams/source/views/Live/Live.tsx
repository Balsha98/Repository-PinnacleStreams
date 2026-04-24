// IMPORTED CORE MODULES
import { useEffect, type ReactElement } from "react";
// IMPORTED STYLESHEETS
import "./css/Live.css";
// IMPORTED CUSTOM MODULES
import type TV from "./types/TV";
import Nav from "../../partials/Nav/Nav";
import Header from "./partials/Header/Header";
import Filters from "./partials/Filters/Filters";
import Layout from "./partials/Layout/Layout";
import Footer from "../../partials/Footer/Footer";

const LIVE: TV[] = [
    {
        id: 1,
        channel: "CBS",
        title: "NFL on CBS",
        description: "Kansas City Chiefs vs. San Francisco 49ers",
        progress: 38,
        image: "",
    },
    {
        id: 2,
        channel: "BET",
        title: "BET Hip Hop Awards 2024",
        description: "Annual awards ceremony celebrating the best in hip hop",
        progress: 62,
        image: "",
    },
    {
        id: 3,
        channel: "MTV",
        title: "MTV Video Music Awards",
        description: "Live from New York City — the biggest night in music",
        progress: 15,
        image: "",
    },
    {
        id: 4,
        channel: "Nickelodeon",
        title: "SpongeBob SquarePants",
        description: "Season 14, Episode 22 — Plankton's latest scheme backfires",
        progress: 80,
        image: "",
    },
    {
        id: 5,
        channel: "Comedy Central",
        title: "South Park",
        description: "Season 27, Episode 8 — The boys take on a new adventure",
        progress: 51,
        image: "",
    },
    {
        id: 6,
        channel: "CBS",
        title: "60 Minutes",
        description: "In-depth investigative reporting on the week's biggest stories",
        progress: 72,
        image: "",
    },
    {
        id: 7,
        channel: "Paramount Network",
        title: "Yellowstone Marathon",
        description: "Binge the complete Season 4 before the finale",
        progress: 44,
        image: "",
    },
    {
        id: 8,
        channel: "MTV",
        title: "Ridiculousness",
        description: "Rob Dyrdek and friends react to the internet's wildest videos",
        progress: 90,
        image: "",
    },
    {
        id: 9,
        channel: "BET",
        title: "BET News Tonight",
        description: "Breaking news and top stories affecting the Black community",
        progress: 25,
        image: "",
    },
    {
        id: 10,
        channel: "Nickelodeon",
        title: "The Loud House",
        description: "Season 6, Episode 14 — Lincoln navigates life with his ten sisters",
        progress: 10,
        image: "",
    },
    {
        id: 11,
        channel: "CBS",
        title: "The Late Show with Stephen Colbert",
        description: "Tonight: exclusive interviews and live performances",
        progress: 33,
        image: "",
    },
    {
        id: 12,
        channel: "Comedy Central",
        title: "The Daily Show",
        description: "Tonight's top stories with a comedic twist",
        progress: 58,
        image: "",
    },
    {
        id: 13,
        channel: "Paramount Network",
        title: "Bar Rescue",
        description: "Jon Taffer steps in to save a struggling bar from closing",
        progress: 67,
        image: "",
    },
    {
        id: 14,
        channel: "BET",
        title: "Tyler Perry's Sistas",
        description: "Season 8, Episode 5 — Tensions rise between the friend group",
        progress: 82,
        image: "",
    },
    {
        id: 15,
        channel: "CBS",
        title: "NCAA Basketball",
        description: "Duke Blue Devils vs. Kentucky Wildcats — Conference Showdown",
        progress: 20,
        image: "",
    },
    {
        id: 16,
        channel: "MTV",
        title: "Jersey Shore: Family Vacation",
        description: "Season 7, Episode 3 — The gang hits the road again",
        progress: 47,
        image: "",
    },
];

const Live = function (): ReactElement {
    useEffect(() => {
        document.title = "Paramount+ Streams | Live TV";
    }, []);

    return (
        <>
            <Nav isMainNav={false} />
            <div className="div-main-edge-container">
                <Header />
                <Filters />
                <Layout live={LIVE} />
                <Footer />
            </div>
        </>
    );
};

export default Live;
