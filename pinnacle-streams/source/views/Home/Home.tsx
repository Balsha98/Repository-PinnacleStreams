// IMPORTED CORE COMPONENTS
import { useEffect } from "react";
// IMPORTED CUSTOM COMPONENTS
import Nav from "../../assets/partials/global/Nav/Nav";
import Hero from "../../assets/partials/views/Home/Hero/Hero";
import Features from "../../assets/partials/views/Home/Features/Features";
import Plans from "../../assets/partials/views/Home/Plans/Plans";
import Footer from "../../assets/partials/global/Footer/Footer";

const Home = function () {
    useEffect(() => {
        document.title = "Pinnacle Streams | Home";
    }, []);

    return (
        <>
            <Nav />
            <div className="div-main-edge-container">
                <Hero />
                <Features />
                <Plans />
                <Footer />
            </div>
        </>
    );
};

export default Home;
