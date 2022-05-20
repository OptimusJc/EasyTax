import styles from "./footer.module.css";
import { Link } from "react-router-dom";
import { BsFacebook, BsTwitter } from "react-icons/bs";

const Footer = () => {
    return (
        <footer>
            <div className={["container", styles.container].join(" ")}>
                <div className={["row", styles.row].join(" ")}>
                    <div className={["col", styles.footer_nav].join(" ")}>
                        <ul className={["navbar-nav"]}>
                            <li className={["nav-item"]}>contact us</li>
                            <li className={["nav-item"]}>
                                <Link to="">contact us</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={["col", styles.footer_nav].join(" ")}>
                        <ul className={["navbar-nav"]}>
                            <li className={["nav-item"]}>about</li>
                            <li className={["nav-item"]}>
                                <Link to="">about us</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={["col", styles.col].join(" ")}>
                        <div className={[styles.footer_brand]}>
                            <Link to="/" className="navbar-brand">
                                <span className="easy">Easy</span>
                                <span className="tax">Tax</span>
                            </Link>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Alias, fugiat omnis? Eum odit
                                neque, labore totam ipsum in ut consequatur
                                consequuntur placeat{" "}
                            </p>
                            <ul>
                                <li>
                                    <BsFacebook />
                                </li>
                                <li>
                                    <BsTwitter />
                                </li>
                            </ul>
                        </div>
                    </div>

                    <p className="copyright">
                        easyTax&#169;2022. All rights reserved
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
