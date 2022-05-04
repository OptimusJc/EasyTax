import { Link } from "react-router-dom";
import styles from "./header.module.css";

const Header = () => {
  return (
    <nav
      className={[
        "navbar",
        "navbar-expand-lg",
        "navbar-light",
        "bg-danger",
        styles.header,
      ].join(" ")}
    >
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <span className="easy">Easy</span>
          <span className="tax">Tax</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-4 mb-lg-0">
            <li className="nav-item">
              <Link to="/" nav-link active aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" nav-link active aria-current="page">
                PAYE
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" nav-link active aria-current="page">
                Witholding VAT
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" nav-link active aria-current="page">
                Individual Tax
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" nav-link>
                Contact us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" nav-link>
                About
              </Link>
            </li>

            <ul className={["navbar-nav", styles.register].join(" ")}>
              <li className="nav-item">
                <Link to="/login" nav-link>
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/register" nav-link>
                  Register
                </Link>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
