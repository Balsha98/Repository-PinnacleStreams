// IMPORTED CORE MODULES
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// IMPORTED CUSTOM MODULES
import App from "./App.tsx";

const root: HTMLElement = document.getElementById("root")!;

createRoot(root).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
