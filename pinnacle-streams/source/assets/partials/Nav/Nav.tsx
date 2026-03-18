// IMPORTED CORE MODULES
import { Link } from "react-router-dom";
import { Mountain } from "lucide-react";
// IMPORTED STYLESHEETS
import "./css/Nav.css";

const Nav = function () {
	return (
		<div className="div-main-nav-container">
			<div className="div-main-nav-logo-container">
				<Mountain size={24} />
				<h2>Pinnacle</h2>
			</div>
			<nav className="main-nav-container">
				<ul className="main-nav-container-links-list">
					<li className="main-nav-container-links-list-item">
						<Link to="/login">Sign In</Link>
					</li>
					<li className="main-nav-container-links-list-item">
						<Link to="/signup">Try Free</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Nav;
