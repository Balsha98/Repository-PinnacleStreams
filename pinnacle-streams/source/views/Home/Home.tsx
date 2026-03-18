// IMPORTED CORE COMPONENTS
import { useEffect } from "react";
// IMPORTED CUSTOM COMPONENTS
import NavPartial from "../../assets/partials/Nav/Nav";
import HeroPartial from "../../assets/partials/views/Home/Hero/Hero";

const Home = function () {
    useEffect(() => {
        document.title = "Pinnacle Streams | Home";
    }, []);

    return (
        <>
            <NavPartial />
            <div className="div-main-edge-container">
                <HeroPartial />
            </div>
        </>
    );
};

export default Home;
