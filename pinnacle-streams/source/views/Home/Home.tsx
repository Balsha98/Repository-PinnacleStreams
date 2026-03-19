// IMPORTED CORE COMPONENTS
import { useEffect } from "react";
// IMPORTED CUSTOM COMPONENTS
import NavPartial from "../../assets/partials/global/Nav/Nav";
import HeroPartial from "../../assets/partials/views/Home/Hero/Hero";
import FooterPartial from "../../assets/partials/global/Footer/Footer";

const Home = function () {
    useEffect(() => {
        document.title = "Pinnacle Streams | Home";
    }, []);

    return (
        <>
            <NavPartial />
            <div className="div-main-edge-container">
                <HeroPartial />
                <FooterPartial />
            </div>
        </>
    );
};

export default Home;
