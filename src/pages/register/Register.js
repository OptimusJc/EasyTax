import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import { Link } from "react-router-dom";
import styles from "./register.module.css";

const Register = () => {
    return (
        <div className={["container", styles.wrapper].join(" ")}>
            <div className={[styles.content_fill]}></div>
            <div className="row">
                <div className={["col", styles.div_col].join(" ")}>
                    <div className={[styles.intro].join(" ")}>
                        <p className="fs-1 text-upper">welcome to easytax</p>
                        <p className="">
                            lorem ipsum dolor sit amet, consectetur adip lorem
                            ipsum dolor sit amet, consectetur adip
                        </p>
                    </div>
                </div>

                <div className={["col", styles.div_col_input].join(" ")}>
                    <div className={[styles.input_div]}>
                        <p className="fw-bold fs-4">
                            <span
                                className={[styles.dash_before_register]}
                            ></span>
                            register
                        </p>

                        <Input
                            title="textInput"
                            placeholder="example@example.com"
                            classes={[styles.input]}
                            type="text"
                        />
                        <Input
                            title="textInput"
                            placeholder="1234"
                            classes={styles.input}
                            type="text"
                        />
                        <Input
                            title="passwordInput"
                            placeholder="password"
                            classes={styles.input}
                            type="password"
                        />
                        <Input
                            title="textInput"
                            placeholder="confirm password"
                            classes={styles.input}
                            type="password"
                        />
                        <div className="d-flex justify-content-center">
                            <Button
                                title="register"
                                classes={[
                                    "btn",
                                    "btn-danger",
                                    styles.btn_danger,
                                ].join(" ")}
                            />
                        </div>

                        <p className={[styles.have_an_account]}>
                            Have an account?
                            <span className={styles.have_an_account_link}>
                                <Link to="/login">Login</Link>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
