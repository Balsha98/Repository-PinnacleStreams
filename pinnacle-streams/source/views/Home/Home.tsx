// IMPORTED CORE COMPONENTS
import { useEffect, useState } from "react";
// IMPORTED CUSTOM COMPONENTS
import PageLoader from "../../partials/loaders/Page/Page";
import Nav from "../../partials/Nav/Nav";
import Hero from "./partials/Hero/Hero";
import Shows from "./partials/Shows/Shows";
import Live from "./partials/Live/Live";
import Movies from "./partials/Movies/Movies";
import Features from "./partials/Features/Features";
import Plans from "./partials/Plans/Plans";
import Newsletter from "./partials/Newsletter/Newsletter";
import Footer from "../../partials/Footer/Footer";

const Home = function () {
    const [isViewLoading, setIsViewLoading] = useState(true);

    useEffect(() => {
        document.title = "Paramount+ Streams | Home";

        const loadingTimer = setTimeout(() => setIsViewLoading(false), 2400);

        return () => clearTimeout(loadingTimer);
    }, []);

    return (
        <>
            <PageLoader isViewLoading={isViewLoading} />
            <Nav isMainNav={true} />
            <Hero />
            <Shows />
            <Live />
            <Movies />
            <Features />
            <Plans />
            <Newsletter />
            <Footer />
        </>
    );
};

export default Home;
