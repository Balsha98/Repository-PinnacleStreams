// IMPORT CORE MODULES
import { Link } from "react-router-dom";
import { Check, Lock, Mail, User } from "lucide-react";
// IMPORTED STYLESHEETS
import "./css/Signup.css";

const Signup = function () {
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
								<input id="first-name" type="text" name="first-name" placeholder="John" />
								<User size={16} />
							</div>
						</div>
						<div className="div-form-signup-view-input-container">
							<label htmlFor="last-name">Last Name</label>
							<div className="div-form-signup-view-input">
								<input id="last-name" type="text" name="last-name" placeholder="Doe" />
								<User size={16} />
							</div>
						</div>
					</div>
					<div className="div-form-signup-view-input-container">
						<label htmlFor="email">Email Address</label>
						<div className="div-form-signup-view-input">
							<input id="email" type="email" name="email" placeholder="you@example.com" />
							<Mail size={16} />
						</div>
					</div>
					<div className="div-form-signup-view-input-container">
						<label htmlFor="password">Password</label>
						<div className="div-form-signup-view-input">
							<input id="password" type="password" name="password" placeholder="Enter your password..." />
							<Lock size={16} />
						</div>
					</div>
					<div className="div-form-signup-view-actions-checkbox-container">
						<button type="button">
							<Check size={12} />
						</button>
						<p>
							I agree to the <Link to="/terms-of-service">Terms of Service</Link> and <Link to="/privacy-policy">Privacy Policy</Link>.
						</p>
					</div>
					<button type="submit">Create Account</button>
				</form>
				<p>
					Already have an account? <Link to="/auth/signup">Sign in.</Link>
				</p>
			</div>
		</div>
	);
};

export default Signup;
