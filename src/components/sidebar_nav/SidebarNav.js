import { Link } from "react-router-dom";
import styles from "./sidebarNav.module.css";

const SidebarNav = () => {
    return (
        <div className={["col", "col-md-6", styles.sidebar_nav].join(" ")}>
            <div className={[""]}>
                <ul className={["nav flex-column"]}>
                    <li className="nav-item">
                        <Link
                            to="/paye"
                            className="nav-link active"
                            aria-current="page"
                        >
                            paye
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/witholding-vat"
                            className="nav-link active"
                            aria-current="page"
                        >
                            withholding vat
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/individual"
                            className="nav-link active"
                            aria-current="page"
                        >
                            individual
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SidebarNav;
