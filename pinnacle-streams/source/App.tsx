// IMPORTED CORE COMPONENTS
import { BrowserRouter, Routes, Route } from "react-router-dom";
// IMPORTED CUSTOM COMPONENTS
import Home from "./views/Home/Home";

const App = function () {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/landing" element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
