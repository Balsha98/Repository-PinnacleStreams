// IMPORTED CORE COMPONENTS
import { useEffect } from "react";
// IMPORTED CUSTOM COMPONENTS
import NavPartial from "../../assets/partials/Nav/Nav";

const Home = function () {
	useEffect(() => {
		document.title = "Pinnacle Streams | Home";
	}, []);

	return (
		<>
			<NavPartial />
		</>
	);
};

export default Home;
