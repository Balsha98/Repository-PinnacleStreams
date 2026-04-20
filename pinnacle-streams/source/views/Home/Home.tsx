// IMPORTED CORE COMPONENTS
import { useEffect } from "react";
// IMPORTED CUSTOM COMPONENTS
import Nav from "../../partials/Nav/Nav";
import Hero from "./partials/Hero/Hero";
import Shows from "./partials/Shows/Shows";
import Live from "./partials/Live/Live";
import Movies from "./partials/Movies/Movies";
import Features from "./partials/Features/Features";
import Plans from "./partials/Plans/Plans";
import Footer from "../../partials/Footer/Footer";

const Home = function () {
    useEffect(() => {
        document.title = "Paramount Streams | Home";
    }, []);

    return (
        <>
            <Nav isMainNav={true} />
            <Hero />
            <Shows />
            <Live />
            <Movies />
            <Features />
            <Plans />
            <Footer />
        </>
    );
};

export default Home;
