// IMPORTED CORE MODULES
import { useEffect, useState, type ReactElement } from "react";
import { Link, useParams } from "react-router-dom";
// IMPORTED STYLESHEETS
import "./css/Auth.css";
// IMPORTED CUSTOM MODULES
import SigninView from "./partials/Signin/Signin";
import SignupView from "./partials/Signup/Signup";

const Auth = function (): ReactElement {
    const [selectedAuthView, setSelectedAuthView] = useState<string>("signin");
    const { id } = useParams();

    useEffect(() => {
        document.title = "Paramount Streams | Auth";
    }, []);

    useEffect(() => {
        // Guard clause.
        if (!id) return;

        ((): void => setSelectedAuthView(id))();
    }, [id]);

    return (
        <div className="div-auth-view-container">
            <header className={`header-auth-view-container ${selectedAuthView}`}>
                <Link to="/auth/signin" className={selectedAuthView === "signin" ? "active" : ""}>
                    Sign In
                </Link>
                <Link to="/auth/signup" className={selectedAuthView === "signup" ? "active" : ""}>
                    Sign Up
                </Link>
            </header>
            {selectedAuthView === "signin" && <SigninView />}
            {selectedAuthView === "signup" && <SignupView />}
        </div>
    );
};

export default Auth;
