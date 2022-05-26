import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import "./index.css";

function App() {
    return (
        <div>
            <Header />
            {/* enables the rendering of the site pages */}
            <Outlet />
            <Footer />
        </div>
    );
}

export default App;
