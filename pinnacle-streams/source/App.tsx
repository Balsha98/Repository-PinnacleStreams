// IMPORTED CORE COMPONENTS
import type { ReactElement } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// IMPORTED STYLESHEETS
import "./assets/css/variables.css";
import "./assets/css/global.css";
import "./assets/css/reusable.css";
// IMPORTED CUSTOM COMPONENTS
import HomeView from "./views/Home/Home";
import AuthView from "./views/Auth/Auth";
import PasswordView from "./views/Password/Password";
import InvalidView from "./views/Invalid/Invalid";
import ShowsView from "./views/Shows/Shows";
import MoviesView from "./views/Movies/Movies";

const App = function (): ReactElement {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeView />} />
                <Route path="/home" element={<HomeView />} />
                <Route path="/auth" element={<AuthView />} />
                <Route path="/auth/:id" element={<AuthView />} />
                <Route path="/password" element={<PasswordView />} />
                {/* <Route path="/shows" element={} />
                <Route path="/live" element={} /> */}
                <Route path="/shows" element={<ShowsView />} />
                <Route path="/movies" element={<MoviesView />} />
                <Route path="*" element={<InvalidView />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
