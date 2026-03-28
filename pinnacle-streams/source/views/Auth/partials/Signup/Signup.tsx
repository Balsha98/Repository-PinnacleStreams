// IMPORTED CORE MODULES
import { useState, type ReactElement } from "react";
import { Link } from "react-router-dom";
import { Check, Eye, EyeOff, Lock, Mail, User } from "lucide-react";
// IMPORTED STYLESHEETS
import "./css/Signup.css";

const Signup = function (): ReactElement {
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
    const [isAgreementChecked, setIsAgreementChecked] = useState<boolean>(false);

    const handleTogglePasswordVisible = (): void => setIsPasswordVisible((v) => !v);

    const handleToggleRememberMe = (): void => setIsAgreementChecked((v) => !v);

    return (
        <div className="div-signup-view-container">
            <div className="div-signup-view-top-container">
                <header className="header-signup-view-top-container">
                    <h2>Create Your Account</h2>
                    <p>Start your 7-day free trial today.</p>
                </header>
                <div className="div-signup-view-top-actions-container">
                    <button>Google</button>
                    <button>Apple</button>
                </div>
            </div>
            <div className="div-signup-view-bottom-container">
                <form className="form-signup-view-container" action="/auth/signin" method="POST">
                    <div className="div-form-signup-view-multi-inputs-container">
                        <div className="div-form-signup-view-input-container">
                            <label htmlFor="first-name">First Name</label>
                            <div className="div-form-signup-view-input">
                                <User size={16} />
                                <input id="first-name" type="text" name="first-name" autoComplete="on" placeholder="John" />
                            </div>
                        </div>
                        <div className="div-form-signup-view-input-container">
                            <label htmlFor="last-name">Last Name</label>
                            <div className="div-form-signup-view-input">
                                <User size={16} />
                                <input id="last-name" type="text" name="last-name" autoComplete="on" placeholder="Doe" />
                            </div>
                        </div>
                    </div>
                    <div className="div-form-signup-view-input-container">
                        <label htmlFor="email">Email Address</label>
                        <div className="div-form-signup-view-input">
                            <Mail size={16} />
                            <input id="email" type="email" name="email" autoComplete="on" placeholder="you@example.com" />
                        </div>
                    </div>
                    <div className="div-form-signup-view-input-container">
                        <label htmlFor="password">Password</label>
                        <div className="div-form-signup-view-input">
                            <Lock size={16} />
                            <input id="password" type={isPasswordVisible ? "text" : "password"} name="password" autoComplete="on" placeholder="Enter your password..." />
                            <button onClick={handleTogglePasswordVisible} type="button">
                                {isPasswordVisible ? <EyeOff size={16} /> : <Eye size={16} />}
                            </button>
                        </div>
                    </div>
                    <div className="div-form-signup-view-actions-checkbox-container">
                        <button className={isAgreementChecked ? "checked" : ""} onClick={handleToggleRememberMe} type="button">
                            <Check size={14} />
                        </button>
                        <p>
                            I agree to the <Link to="/terms-of-service">Terms of Service</Link> and <Link to="/privacy-policy">Privacy Policy</Link>.
                        </p>
                    </div>
                    <button type="submit">Create Account</button>
                </form>
                <p>
                    Already have an account? <Link to="/auth/signin">Sign in.</Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;
