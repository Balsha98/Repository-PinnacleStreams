// IMPORT CORE MODULES
import { Link } from "react-router-dom";
import { Check, Lock, Mail } from "lucide-react";
// IMPORTED STYLESHEETS
import "./css/Signin.css";

const Signin = function () {
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
							<input id="email" type="email" name="email" placeholder="you@example.com" />
							<Mail size={16} />
						</div>
					</div>
					<div className="div-form-signin-view-input-container">
						<label htmlFor="password">Password</label>
						<div className="div-form-signin-view-input">
							<input id="password" type="password" name="password" placeholder="Enter your password..." />
							<Lock size={16} />
						</div>
					</div>
					<div className="div-form-signin-view-actions-container">
						<div className="div-form-signin-view-actions-checkbox-container">
							<button type="button">
								<Check size={12} />
							</button>
							<span>Remember me?</span>
						</div>
						<Link to="/password-reset">Forgot password?</Link>
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
