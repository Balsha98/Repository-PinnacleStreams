// IMPORTED CORE MODULES
import { Mail, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
// IMPORTED STYLESHEETS
import "./css/Newsletter.css";

const Newsletter = () => {
    return (
        <section className="section-newsletter-container">
            <div className="div-main-edge-container">
                <header className="header-section-newsletter-container">
                    <h2>
                        Stay in the <span>Loop</span>
                    </h2>
                    <p>Join for free &mdash; unsubscribe anytime, no spam ever.</p>
                </header>
                <form className="form-newsletter-container" action="/auth/signin" method="POST">
                    <div className="div-form-newsletter-input-container">
                        <Mail size={16} />
                        <input id="email" type="email" name="email" autoComplete="on" placeholder="you@example.com" />
                    </div>
                    <button type="submit">Subscribe Now</button>
                </form>
                <footer className="footer-section-newsletter-container">
                    <ShieldCheck size={14} />
                    <p>
                        We respect your privacy. For more information read our <Link to="/privacy-policy">Privacy Policy</Link>.
                    </p>
                </footer>
            </div>
        </section>
    );
};

export default Newsletter;
