import { Link } from "react-router-dom";
import styles from "./header.module.css";

const Header = () => {
    return (
        <header>
            <nav
                class={[
                    "navbar navbar-dark bg-light fixed-top",
                    styles.navbar,
                ].join(" ")}
            >
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/">
                        EasyTax
                    </Link>
                    <button
                        class={["navbar-toggler", styles.navbar_toggler].join(
                            " "
                        )}
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasNavbar"
                        aria-controls="offcanvasNavbar"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div
                        class={[
                            "offcanvas offcanvas-end",
                            styles.offcanvas_end,
                        ].join(" ")}
                        tabindex="-1"
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                    >
                        {/* * offcanvas header  */}
                        <div class="offcanvas-header">
                            <h5
                                class="offcanvas-title"
                                id="offcanvasNavbarLabel"
                            >
                                EasyTax
                            </h5>
                            <button
                                type="button"
                                class="btn-close text-reset"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close"
                            ></button>
                        </div>
                        {/* * offcanvas body */}
                        <div
                            class={[
                                "offcanvas-body",
                                styles.offcanvas_body,
                            ].join(" ")}
                        >
                            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <Link
                                        to="/"
                                        nav-link
                                        active
                                        aria-current="page"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        to="/paye"
                                        nav-link
                                        active
                                        aria-current="page"
                                    >
                                        PAYE
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        to="/witholding-vat"
                                        nav-link
                                        active
                                        aria-current="page"
                                    >
                                        Witholding VAT
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        to="/individual"
                                        nav-link
                                        active
                                        aria-current="page"
                                    >
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
                            </ul>

                            <ul
                                className={["navbar-nav", styles.register].join(
                                    " "
                                )}
                            >
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
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
