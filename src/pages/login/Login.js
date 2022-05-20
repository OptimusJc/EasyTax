import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import { Link } from "react-router-dom";
import styles from "../register/register.module.css";
import styles1 from "./login.module.css";

import { BsFillPersonFill, BsLockFill } from "react-icons/bs";

const Login = () => {
    return (
        <div className={["container", styles.wrapper].join(" ")}>
            {/* <div className={[styles.content_fill]}></div> */}
            <div
                className={[
                    "row justify-content-center",
                    styles1.login_row,
                ].join(" ")}
            >
                <div className={["col", "col-md-6", styles.div_col].join(" ")}>
                    <div className={[styles.intro].join(" ")}>
                        <p className="fs-1 text-upper">welcome to easytax</p>
                        <p className="">
                            lorem ipsum dolor sit amet, consectetur adip lorem
                            ipsum dolor sit amet, consectetur adip
                        </p>
                    </div>
                </div>

                <div
                    className={["col", "col-md-6", styles.div_col_input].join(
                        " "
                    )}
                >
                    <div className={[styles.input_div]}>
                        <p className="fw-bold fs-4">
                            <span
                                className={[styles.dash_before_register]}
                            ></span>
                            login
                        </p>
                        <form className={["was-validated"].join(" ")}>
                            <div className={[styles1.input_group]}>
                                <Input
                                    title="email"
                                    placeholder="example@example.com"
                                    classes={[styles.input, styles1.input].join(
                                        " "
                                    )}
                                    type="email"
                                />
                                <BsFillPersonFill
                                    className={[styles1.email_icon]}
                                />
                            </div>
                            <div className={[styles1.input_group]}>
                                <Input
                                    title="password"
                                    placeholder="password"
                                    classes={[styles.input, styles1.input].join(
                                        " "
                                    )}
                                    type="password"
                                    pattern="[A-Za-z]"
                                />
                                <BsLockFill className={[styles1.lock_icon]} />
                            </div>

                            <div className={[styles1.form_check].join(" ")}>
                                <Input
                                    clasName="form-check-input "
                                    type="checkbox"
                                    value=""
                                    id="flexCheckDefault"
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="flexCheckDefault"
                                >
                                    Remember Me
                                </label>
                            </div>
                        </form>
                        <p
                            className={["text-end", styles1.forgot_link].join(
                                " "
                            )}
                        >
                            <Link to="/forgot-password">Forgot Password?</Link>
                        </p>

                        <div className="d-flex justify-content-center">
                            <Button
                                title="login"
                                classes={[
                                    "btn",
                                    "btn-danger",
                                    styles.btn_danger,
                                ].join(" ")}
                            />
                        </div>

                        <p className={[styles.have_an_account]}>
                            new here?
                            <span className={styles.have_an_account_link}>
                                <Link to="/register"> register</Link>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
