import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import "./index.css";

function App() {
  return (
    <div className="container">
      <Header />
      {/* enables the rendering of the site pages */}
      <Outlet />
    </div>
  );
}

export default App;
