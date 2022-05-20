import styles from "./about.module.css";
import tax from "../../images/taxes.jpg";

import Button from "../../components/button/Button";
import logo from "../../images/logo.svg";

import Footer from "../../components/footer/Footer";

const About = () => {
    return (
        <div className={[styles.wrapper]}>
            <div></div>
            <div className={["container"]}>
                <div className={["row"]}>
                    <div
                        className={["row text-center", styles.easy_tax].join(
                            " "
                        )}
                    >
                        {/* <h3 className={["h4"]}>
                            Easy<span>Tax</span>
                        </h3> */}

                        <div className={[styles.about_logo].join(" ")}>
                            <img src={logo} alt="logo" />
                        </div>
                        <p className={["display-4 text-white fw-bold"]}>
                            About Us
                        </p>
                    </div>

                    <div className={["col", styles.col].join(" ")}>
                        <div className={[styles.card]}>
                            <div className={[styles.card_header]}>
                                <img src={tax} alt="" />
                            </div>
                            <div className={[styles.card_body]}>
                                <h6
                                    className={["lead", styles.card_lead].join(
                                        " "
                                    )}
                                >
                                    about our agency
                                </h6>
                                <h3 className="h3">get in touch with us</h3>
                                <p className={["card-text"]}>
                                    lorem ipsum dolor sit amet, consectetur adip
                                    lorem ipsum dolor sit amet, consectetur adip
                                </p>
                            </div>
                        </div>
                    </div>

                    <div
                        className={[
                            "row",
                            // styles.easy_tax,
                            styles.easy_row,
                        ].join(" ")}
                    >
                        <div className={["col", styles.col].join(" ")}>
                            <div
                                className={["card", styles.card_about].join(
                                    " "
                                )}
                            >
                                <div className="card-body">
                                    <h5 className="card-title display-4 fw-normal text-capitalize mb-4">
                                        need any help? contact us
                                    </h5>

                                    <p className="card-text">
                                        Some quick example text to build on the
                                        card title and make up the bulk of the
                                        card's content.
                                    </p>
                                    <Button
                                        title="Contact Us"
                                        classes={[
                                            "btn",
                                            "btn-light",
                                            "mb-3",
                                            styles.btn_light,
                                        ].join(" ")}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default About;
