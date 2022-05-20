import lottie from "lottie-web";
import animationData from "../../images/lottie/alert.json";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";

//core imports
import { Link } from "react-router-dom";
import { useEffect } from "react";
// styles
import styles from "./forgot.module.css";

const ForgotPassword = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
    };

    useEffect(() => {
        lottie.loadAnimation({
            container: document.querySelector("#lottie-div"),
            animationData: animationData,
            options: defaultOptions,
        });
    }, []);

    return (
        <div className="container mt-4">
            <div className="row">
                <div className={["col", styles.col].join(" ")}>
                    <div className={["card", styles.card].join(" ")}>
                        <div
                            className={["card-header", styles.card_header].join(
                                " "
                            )}
                        >
                            <div
                                id="lottie-div"
                                className={styles.lottie_div}
                            ></div>
                            <h3 className="h3">forgot password</h3>
                        </div>
                        <div
                            className={["card-body", styles.card_body].join(
                                " "
                            )}
                        >
                            <Input
                                title="forgot email"
                                placeholder="Enter email"
                                type="email"
                                classes="forgotPasswordEmailField"
                            />
                            <Button
                                title="submit"
                                classes={["btn btn-danger", styles.btn].join(
                                    " "
                                )}
                            />
                            <Link to="/login">back to login</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
