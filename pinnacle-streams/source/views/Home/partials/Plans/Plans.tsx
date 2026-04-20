// IMPORTED CORE COMPONENTS
import { Link } from "react-router-dom";
import { Check, X } from "lucide-react";
// IMPORTED STYLESHEETS
import "./css/Plans.css";

const Plans = function () {
    return (
        <div className="div-main-edge-container">
            <section className="section-plans-container">
                <header className="header-section-plans-container">
                    <h2>
                        Choose Your <span>Plan</span>
                    </h2>
                    <p>All plans include a 7-day free trial. No credit card required to start.</p>
                </header>
                <ul className="section-plans-cards-list">
                    <li className="section-plans-cards-list-item">
                        <header className="header-section-plans-cards-list-item">
                            <span>Essential</span>
                            <div className="div-header-section-plans-cards-list-item-info-container">
                                <h4>
                                    <sup>$</sup>5
                                </h4>
                                <span>per month, with ads</span>
                            </div>
                        </header>
                        <ul className="section-plans-cards-list-item-details-list">
                            <li className="section-plans-cards-list-item-details-list-item includes">
                                <Check size={16} />
                                <span>40,000+ titles</span>
                            </li>
                            <li className="section-plans-cards-list-item-details-list-item includes">
                                <Check size={16} />
                                <span>HD streaming</span>
                            </li>
                            <li className="section-plans-cards-list-item-details-list-item includes">
                                <Check size={16} />
                                <span>1 screen at a time</span>
                            </li>
                            <li className="section-plans-cards-list-item-details-list-item excludes">
                                <X size={16} />
                                <span>No Live TV</span>
                            </li>
                            <li className="section-plans-cards-list-item-details-list-item excludes">
                                <X size={16} />
                                <span>No downloads</span>
                            </li>
                        </ul>
                        <Link to="/plans/essential">Start Free Trial</Link>
                    </li>
                    <li className="section-plans-cards-list-item popular">
                        <header className="header-section-plans-cards-list-item">
                            <span>Paramount+</span>
                            <div className="div-header-section-plans-cards-list-item-info-container">
                                <h4>
                                    <sup>$</sup>12
                                </h4>
                                <span>per month, ad-free</span>
                            </div>
                        </header>
                        <ul className="section-plans-cards-list-item-details-list">
                            <li className="section-plans-cards-list-item-details-list-item includes">
                                <Check size={16} />
                                <span>40,000+ titles</span>
                            </li>
                            <li className="section-plans-cards-list-item-details-list-item includes">
                                <Check size={16} />
                                <span>4K + HDR streaming</span>
                            </li>
                            <li className="section-plans-cards-list-item-details-list-item includes">
                                <Check size={16} />
                                <span>3 screens at once</span>
                            </li>
                            <li className="section-plans-cards-list-item-details-list-item excludes">
                                <X size={16} />
                                <span>200+ Live TV channels</span>
                            </li>
                            <li className="section-plans-cards-list-item-details-list-item excludes">
                                <X size={16} />
                                <span>Unlimited downloads</span>
                            </li>
                        </ul>
                        <Link to="/plans/paramount-plus">Start Free Trial</Link>
                    </li>
                    <li className="section-plans-cards-list-item">
                        <header className="header-section-plans-cards-list-item">
                            <span>Annual</span>
                            <div className="div-header-section-plans-cards-list-item-info-container">
                                <h4>
                                    <sup>$</sup>99
                                </h4>
                                <span>per year &mdash; save 31%</span>
                            </div>
                        </header>
                        <ul className="section-plans-cards-list-item-details-list">
                            <li className="section-plans-cards-list-item-details-list-item includes">
                                <Check size={16} />
                                <span>Everything in Paramount+</span>
                            </li>
                            <li className="section-plans-cards-list-item-details-list-item includes">
                                <Check size={16} />
                                <span>Priority support</span>
                            </li>
                            <li className="section-plans-cards-list-item-details-list-item includes">
                                <Check size={16} />
                                <span>Early access to releases</span>
                            </li>
                            <li className="section-plans-cards-list-item-details-list-item includes">
                                <Check size={16} />
                                <span>4 screens at once</span>
                            </li>
                            <li className="section-plans-cards-list-item-details-list-item includes">
                                <Check size={16} />
                                <span>5 profiles</span>
                            </li>
                        </ul>
                        <Link to="/plans/annual">Start Free Trial</Link>
                    </li>
                </ul>
            </section>
        </div>
    );
};

export default Plans;
