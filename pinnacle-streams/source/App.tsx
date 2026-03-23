// IMPORTED CORE COMPONENTS
import { BrowserRouter, Routes, Route } from "react-router-dom";
// IMPORTED STYLESHEETS
import "./assets/css/variables.css";
import "./assets/css/global.css";
import "./assets/css/reusable.css";
// IMPORTED CUSTOM COMPONENTS
import HomeView from "./views/Home/Home";
import AuthView from "./views/Auth/Auth";
import InvalidView from "./views/Invalid/Invalid";

const App = function () {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomeView />} />
				<Route path="/home" element={<HomeView />} />
				<Route path="/auth" element={<AuthView />} />
				<Route path="/auth/:id" element={<AuthView />} />
				<Route path="*" element={<InvalidView />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
