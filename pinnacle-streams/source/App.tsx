// IMPORTED CORE COMPONENTS
import { BrowserRouter, Routes, Route } from "react-router-dom";
// IMPORTED STYLESHEETS
import "./assets/css/variables.css";
import "./assets/css/global.css";
import "./assets/css/reusable.css";
// IMPORTED CUSTOM COMPONENTS
import HomeView from "./views/Home/Home";
import InvalidView from "./views/Invalid/Invalid";

const App = function () {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomeView />} />
				<Route path="/home" element={<HomeView />} />
				{/* <Route path="/login" element={<LoginView />} />
				<Route path="/signup" element={<SignupView />} /> */}
				<Route path="*" element={<InvalidView />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
