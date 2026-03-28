// IMPORTED CORE MODULES
import { Link } from "react-router-dom";
import { Lock, Mail } from "lucide-react";
// IMPORTED STYLESHEETS
import "./css/Password.css";
import { useEffect, type ReactElement } from "react";

const Password = function (): ReactElement {
    useEffect(() => {
        document.title = "Pinnacle Streams | Forgot Password";
    }, []);

    return (
        <div className="div-password-view-container">
            <header className="header-password-view-container">
                <div className="div-header-password-view-icon-container">
                    <Lock size={28} />
                </div>
                <div className="div-header-password-view-info-container">
                    <h2>Forgot password?</h2>
                    <p>Enter your email address and we'll send you a reset link.</p>
                </div>
            </header>
            <div className="div-password-view-form-container">
                <form className="form-password-view-container" action="/auth/signin" method="POST">
                    <div className="div-form-password-view-input-container">
                        <label htmlFor="email">Email Address</label>
                        <div className="div-form-password-view-input">
                            <Mail size={16} />
                            <input id="email" type="email" name="email" autoComplete="on" placeholder="you@example.com" />
                        </div>
                    </div>
                    <button type="submit">Send Reset Link</button>
                </form>
                <p>
                    Remembered your password? <Link to="/auth/signin">Sign in.</Link>
                </p>
            </div>
        </div>
    );
};

export default Password;
