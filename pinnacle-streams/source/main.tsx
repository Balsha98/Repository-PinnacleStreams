// IMPORTED CORE MODULES
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// IMPORTED CUSTOM MODULES
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
