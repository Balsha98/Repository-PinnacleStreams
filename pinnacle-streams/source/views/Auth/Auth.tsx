// IMPORTED CORE MODULES
import { useEffect, useState } from "react";
// IMPORTED STYLESHEETS
import "./css/Auth.css";
// IMPORTED CUSTOM MODULES
import SigninView from "./partials/Signin/Signin";
import SignupView from "./partials/Signup/Signup";

const Auth = function () {
	const [selectedAuthView, setSelectedAuthView] = useState("signin");

	const handleToggleAuthView = (e: any) => setSelectedAuthView(e.target.dataset.view);

	useEffect(() => {
		document.title = "Pinnacle Streams | Auth";
	}, []);

	return (
		<div className="div-auth-view-container">
			<header className={`header-auth-view-container ${selectedAuthView}`}>
				<button className={selectedAuthView === "signin" ? "active" : ""} onClick={handleToggleAuthView} data-view="signin">
					Sign In
				</button>
				<button className={selectedAuthView === "signup" ? "active" : ""} onClick={handleToggleAuthView} data-view="signup">
					Sign Up
				</button>
			</header>
			{selectedAuthView === "signin" && <SigninView />}
			{selectedAuthView === "signup" && <SignupView />}
		</div>
	);
};

export default Auth;
