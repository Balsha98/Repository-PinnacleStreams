// IMPORTED CORE MODULES
import { useEffect, type ReactElement } from "react";
// IMPORTED STYLESHEETS
import "./css/News.css";
// IMPORTED CUSTOM MODULES
import type Article from "./types/Article";
import Nav from "../../partials/Nav/Nav";
import Header from "./partials/Header/Header";
import Filters from "./partials/Filters/Filters";
import Layout from "./partials/Layout/Layout";
import Newsletter from "../Home/partials/Newsletter/Newsletter";
import Footer from "../../partials/Footer/Footer";

const NEWS: Article[] = [
    {
        id: 1,
        title: "Yellowstone Season 5 Part 2: Everything We Know About the Final Chapter",
        excerpt:
            "After years of speculation and a lengthy production hiatus, the Dutton saga is finally coming to an end. We break down everything confirmed about the final episodes, the cast returns, and what the sprawling finale means for the franchise's future.",
        category: "News",
        author: "James Mitchell",
        initials: "JM",
        date: "Nov 14, 2024",
        readTime: "8 min read",
        image: "",
    },
    {
        id: 2,
        title: "Tulsa King Season 2: Sylvester Stallone Returns and What to Expect",
        excerpt: "The Mafia boss turned Oklahoma crime boss is back. We preview the second season and what new challenges await Dwight Manfredi in unfamiliar territory.",
        category: "News",
        author: "Sarah Chen",
        initials: "SC",
        date: "Nov 10, 2024",
        readTime: "5 min read",
        image: "",
    },
    {
        id: 3,
        title: "Inside the Making of Halo Season 2: From Game to Screen",
        excerpt: "The production team behind the most ambitious video game adaptation on television opens up about the challenges of translating the iconic franchise.",
        category: "Behind the Scenes",
        author: "Marcus Webb",
        initials: "MW",
        date: "Nov 8, 2024",
        readTime: "7 min read",
        image: "",
    },
    {
        id: 4,
        title: "Strange New Worlds Cast on Playing Iconic Star Trek Characters",
        excerpt: "Anson Mount, Ethan Peck, and Rebecca Romijn discuss the weight of stepping into roles beloved by generations of fans.",
        category: "Interviews",
        author: "Priya Nair",
        initials: "PN",
        date: "Nov 6, 2024",
        readTime: "6 min read",
        image: "",
    },
    {
        id: 5,
        title: "The Good Fight Series Finale: A Fitting End to Six Seasons of Excellence",
        excerpt: "After six seasons of razor-sharp legal drama and political commentary, Diane Lockhart's story concludes in a way that honors everything the show stood for.",
        category: "Reviews",
        author: "Emily Ross",
        initials: "ER",
        date: "Nov 4, 2024",
        readTime: "9 min read",
        image: "",
    },
    {
        id: 6,
        title: "Pinnacle+ Originals Are Redefining Prestige Television",
        excerpt: "From the open plains of Yellowstone to the streets of Tulsa, how Pinnacle+ built one of the most distinct voices in premium streaming content.",
        category: "Originals",
        author: "James Mitchell",
        initials: "JM",
        date: "Nov 2, 2024",
        readTime: "10 min read",
        image: "",
    },
    {
        id: 7,
        title: "Mayor of Kingstown Season 3: Power, Prison, and the Price of Justice",
        excerpt: "Mike McLusky navigates increasingly dangerous territory as the lines between law enforcement and criminal enterprise continue to blur.",
        category: "Reviews",
        author: "David Park",
        initials: "DP",
        date: "Oct 30, 2024",
        readTime: "6 min read",
        image: "",
    },
    {
        id: 8,
        title: "Taylor Sheridan Interview: Building the Yellowstone Universe",
        excerpt: "The architect of the most successful franchise in cable television history speaks candidly about his creative process, the Dutton legacy, and what comes next.",
        category: "Interviews",
        author: "Sarah Chen",
        initials: "SC",
        date: "Oct 28, 2024",
        readTime: "12 min read",
        image: "",
    },
    {
        id: 9,
        title: "Behind the Cameras of 1923: Filming in the American Frontier",
        excerpt: "Director Ben Richardson on the logistical challenges of recreating early 20th century Montana and what made Harrison Ford and Helen Mirren the perfect casting choices.",
        category: "Behind the Scenes",
        author: "Marcus Webb",
        initials: "MW",
        date: "Oct 25, 2024",
        readTime: "8 min read",
        image: "",
    },
    {
        id: 10,
        title: "How Lioness Became Streaming's Most Underrated Action Series",
        excerpt: "Zoe Saldana's CIA operative thriller quietly built one of the most loyal audiences on Pinnacle+. Here's how it earned its place among the platform's best.",
        category: "Culture",
        author: "Priya Nair",
        initials: "PN",
        date: "Oct 22, 2024",
        readTime: "7 min read",
        image: "",
    },
    {
        id: 11,
        title: "Pinnacle+ Announces Three New Original Series for 2025",
        excerpt: "The streamer reveals its most ambitious slate yet, including a limited series, a sci-fi epic, and a highly anticipated comedy from a beloved showrunner.",
        category: "News",
        author: "Emily Ross",
        initials: "ER",
        date: "Oct 20, 2024",
        readTime: "4 min read",
        image: "",
    },
    {
        id: 12,
        title: "Halo Season 2 Review: A Redemption Arc Worth Watching",
        excerpt: "After a divisive first season, the Master Chief's second outing on Pinnacle+ corrects course in nearly every way that matters.",
        category: "Reviews",
        author: "David Park",
        initials: "DP",
        date: "Oct 18, 2024",
        readTime: "8 min read",
        image: "",
    },
    {
        id: 13,
        title: "The Women of Star Trek: Strange New Worlds Are Carrying the Franchise",
        excerpt: "Una Chin-Riley, Nyota Uhura, and Nurse Chapel are at the center of the best Trek has been in decades. A celebration of the show's most compelling characters.",
        category: "Originals",
        author: "Sarah Chen",
        initials: "SC",
        date: "Oct 15, 2024",
        readTime: "9 min read",
        image: "",
    },
    {
        id: 14,
        title: "Sylvester Stallone on Reinventing Himself at 78 in Tulsa King",
        excerpt: "In a candid conversation, the Hollywood legend talks about why Dwight Manfredi is the role of his career and what keeps him coming back to set every day.",
        category: "Interviews",
        author: "James Mitchell",
        initials: "JM",
        date: "Oct 12, 2024",
        readTime: "11 min read",
        image: "",
    },
    {
        id: 15,
        title: "Pinnacle+ Breaks Streaming Records with Yellowstone Finale Viewers",
        excerpt: "The numbers are in and they are historic. The most-watched cable drama of the decade delivered a finale that shattered every viewership record on the platform.",
        category: "News",
        author: "Emily Ross",
        initials: "ER",
        date: "Oct 10, 2024",
        readTime: "3 min read",
        image: "",
    },
    {
        id: 16,
        title: "On Set with the Crew of 1883: Rebuilding the American West",
        excerpt: "A deep dive into the production design, costume work, and practical effects that made 1883 one of the most visually stunning series of the decade.",
        category: "Behind the Scenes",
        author: "Marcus Webb",
        initials: "MW",
        date: "Oct 8, 2024",
        readTime: "10 min read",
        image: "",
    },
];

const News = function (): ReactElement {
    useEffect(() => {
        document.title = "Paramount+ Streams | News";
    }, []);

    return (
        <>
            <Nav isMainNav={false} />
            <Header />
            <Filters />
            <Layout news={NEWS} />
            <Newsletter />
            <Footer />
        </>
    );
};

export default News;
