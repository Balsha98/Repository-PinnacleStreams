// IMPORTED CORE MODULES
import { CirclePlay, Download, ShieldCheck, TvMinimal } from "lucide-react";
// IMPORTED STYLESHEETS
import "./css/Features.css";

const Features = function () {
    return (
        <section className="section-features-container">
            <header className="header-section-features-container">
                <h2>
                    Why <span>Paramount+</span>?
                </h2>
                <p>Everything you love to watch &mdash; live, on demand, and always in stunning quality.</p>
            </header>
            <ul className="section-features-container-list">
                <li className="section-features-container-list-item">
                    <div className="div-section-features-container-list-item-icon-container">
                        <CirclePlay size={20} />
                    </div>
                    <div className="div-section-features-container-list-item-info-container">
                        <h4>40,000+ Titles</h4>
                        <p>From blockbuster movies to binge-worthy series, sports, and live news &mdash; all in one place.</p>
                    </div>
                </li>
                <li className="section-features-container-list-item">
                    <div className="div-section-features-container-list-item-icon-container">
                        <TvMinimal size={20} />
                    </div>
                    <div className="div-section-features-container-list-item-info-container">
                        <h4>Live TV Included</h4>
                        <p>Stream 200+ live channels including CBS, BET, MTV, Nickelodeon, and Comedy Central.</p>
                    </div>
                </li>
                <li className="section-features-container-list-item">
                    <div className="div-section-features-container-list-item-icon-container">
                        <Download size={20} />
                    </div>
                    <div className="div-section-features-container-list-item-info-container">
                        <h4>Download & Watch</h4>
                        <p>Save your favorites offline and watch anywhere — on the plane, subway, or wherever life takes you.</p>
                    </div>
                </li>
                <li className="section-features-container-list-item">
                    <div className="div-section-features-container-list-item-icon-container">
                        <ShieldCheck size={20} />
                    </div>
                    <div className="div-section-features-container-list-item-info-container">
                        <h4>No Contracts</h4>
                        <p>Cancel anytime. No hidden fees, no commitments. Your subscription, your rules.</p>
                    </div>
                </li>
            </ul>
        </section>
    );
};

export default Features;
