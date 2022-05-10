import { Link } from "react-router-dom";
import styles from "../paye/paye.module.css";
import Input from "../../components/input/Input";
import Footer from "../../components/footer/Footer";
import stylesW from "./witholding.module.css";

const WitholdingVAT = () => {
    return (
        <div className="container">
            <div className={["row"]}>
                <div className={["col", styles.sidebar_nav].join(" ")}>
                    <div className={[""]}>
                        <ul className={["nav flex-column"]}>
                            <li className="nav-item">
                                <Link
                                    to=""
                                    className="nav-link active"
                                    aria-current="page"
                                >
                                    paye
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to=""
                                    className="nav-link active"
                                    aria-current="page"
                                >
                                    withholding vat
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to=""
                                    className="nav-link active"
                                    aria-current="page"
                                >
                                    individual
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={["col", styles.col].join(" ")}>
                    <h3 className={["h3"]}>witholding tax application form</h3>
                    <div className={[""]}>
                        <div class="mb-3">
                            <label for="textInput" class="form-label">
                                Pin of Withdrawee
                            </label>
                            <Input
                                title="pinOfEmployee"
                                placeholder="1234"
                                // classes="form-control"
                                type="text"
                            />
                        </div>

                        <div class="mb-3">
                            <label for="textInput" class="form-label">
                                Invoice Number
                            </label>

                            <Input
                                title="textInput"
                                placeholder="invoice no"
                                // classes="form-control"
                                type="number"
                            />
                        </div>

                        <div class="mb-3">
                            <label for="textInput" class="form-label">
                                Invoice Amount
                            </label>
                            <Input
                                title="textInput"
                                placeholder="0.00"
                                // classes="form-control"
                                type="number"
                            />
                        </div>

                        <div class="mb-3">
                            <label for="textInput" class="form-label">
                                Payment Date
                            </label>
                            <Input
                                title="dateInput"
                                placeholder="DD/MM/YYYY"
                                // classes="form-control"
                                type="date"
                            />
                        </div>

                        <div class="mb-3">
                            <label for="textInput" class="form-label">
                                Total Witholding VAT amount
                            </label>
                            <Input
                                title="textInput"
                                placeholder="0.00"
                                // classes="form-control"
                                type="number"
                                min="0"
                            />
                        </div>

                        <div class="mb-3">
                            <label for="textInput" class="form-label">
                                Total Witholding Adjustment amount
                            </label>
                            <Input
                                title="textInput"
                                placeholder="0.00"
                                // classes="form-control"
                                type="number"
                                min="0"
                            />
                        </div>

                        <div class="mb-3">
                            <label
                                for="textInput"
                                class={["form-label", stylesW.total_label].join(
                                    " "
                                )}
                            >
                                Total Witholding Tax Payable
                            </label>
                            <Input
                                title="textInput"
                                placeholder="0.00"
                                // classes="form-control"
                                type="number"
                                min="0"
                            />
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    );
};

export default WitholdingVAT;
