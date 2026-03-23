// IMPORTED CORE MODULES
import { useState } from "react";
import { Link } from "react-router-dom";
import { Check, Eye, EyeOff, Lock, Mail } from "lucide-react";
// IMPORTED STYLESHEETS
import "./css/Signin.css";

const Signin = function () {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isRememberMeChecked, setIsRememberMeChecked] = useState(false);

    const handleTogglePasswordVisible = () => setIsPasswordVisible((v) => !v);

    const handleToggleRememberMe = () => setIsRememberMeChecked((v) => !v);

    return (
        <div className="div-signin-view-container">
            <div className="div-signin-view-top-container">
                <header className="header-signin-view-top-container">
                    <h2>Welcome Back</h2>
                    <p>Sign in to continue watching.</p>
                </header>
                <div className="div-signin-view-top-actions-container">
                    <button>Google</button>
                    <button>Apple</button>
                </div>
            </div>
            <div className="div-signin-view-bottom-container">
                <form className="form-signin-view-container" action="/auth/signin" method="POST">
                    <div className="div-form-signin-view-input-container">
                        <label htmlFor="email">Email Address</label>
                        <div className="div-form-signin-view-input">
                            <Mail size={16} />
                            <input id="email" type="email" name="email" autoComplete="on" placeholder="you@example.com" />
                        </div>
                    </div>
                    <div className="div-form-signin-view-input-container">
                        <label htmlFor="password">Password</label>
                        <div className="div-form-signin-view-input">
                            <Lock size={16} />
                            <input id="password" type={isPasswordVisible ? "text" : "password"} name="password" autoComplete="on" placeholder="Enter your password..." />
                            <button onClick={handleTogglePasswordVisible} type="button">
                                {isPasswordVisible ? <EyeOff size={16} /> : <Eye size={16} />}
                            </button>
                        </div>
                    </div>
                    <div className="div-form-signin-view-actions-container">
                        <div className="div-form-signin-view-actions-checkbox-container">
                            <button className={isRememberMeChecked ? "checked" : ""} onClick={handleToggleRememberMe} type="button">
                                <Check size={14} />
                            </button>
                            <span>Remember me?</span>
                        </div>
                        <Link to="/password">Forgot password?</Link>
                    </div>
                    <button type="submit">Sign In</button>
                </form>
                <p>
                    Don't have an account? <Link to="/auth/signup">Sign up for free.</Link>
                </p>
            </div>
        </div>
    );
};

export default Signin;
