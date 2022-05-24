import { Link } from "react-router-dom";
import styles from "./header.module.css";

const Header = () => {
    return (
        <header>
            <nav
                className={[
                    "navbar navbar-dark bg-light fixed-top",
                    styles.navbar,
                ].join(" ")}
            >
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        EasyTax
                    </Link>
                    <button
                        className={[
                            "navbar-toggler",
                            styles.navbar_toggler,
                        ].join(" ")}
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasNavbar"
                        aria-controls="offcanvasNavbar"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className={[
                            "offcanvas offcanvas-end",
                            styles.offcanvas_end,
                        ].join(" ")}
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                    >
                        {/* * offcanvas header  */}
                        <div className="offcanvas-header">
                            <h5
                                className="offcanvas-title"
                                id="offcanvasNavbarLabel"
                            >
                                EasyTax
                            </h5>
                            <button
                                type="button"
                                className="btn-close text-reset"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close"
                            ></button>
                        </div>
                        {/* * offcanvas body */}
                        <div
                            className={[
                                "offcanvas-body",
                                styles.offcanvas_body,
                            ].join(" ")}
                        >
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <Link
                                        to="/"
                                        className="nav-link"
                                        aria-current="page"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        to="/paye"
                                        className="nav-link"
                                        aria-current="page"
                                    >
                                        PAYE
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        to="/witholding-vat"
                                        className="nav-link"
                                        aria-current="page"
                                    >
                                        Witholding VAT
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        to="/individual"
                                        className="nav-link"
                                        aria-current="page"
                                    >
                                        Individual Tax
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contact" className="nav-link">
                                        Contact us
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/about" className="nav-link">
                                        About
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/admin" className="nav-link">
                                        Admin
                                    </Link>
                                </li>
                            </ul>

                            <ul
                                className={["navbar-nav", styles.register].join(
                                    " "
                                )}
                            >
                                <li className="nav-item">
                                    <Link to="/login" className="nav-link">
                                        Login
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/register" className="nav-link">
                                        Register
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
