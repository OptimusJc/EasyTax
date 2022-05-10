import { Link } from "react-router-dom";
import InputDropdown from "../../components/input/InputDropdown";
import Input from "../../components/input/Input";

import styles from "./paye.module.css";

import Footer from "../../components/footer/Footer";

const Paye = () => {
    const DISABILITY_CHOICE = ["yes", "no"];
    const TYPE_OF_RETURN = ["original", "amended"];
    const ENTITY_TYPE = ["head office", "branch"];
    const RESIDENTIAL_STATUS = ["resident", "non-resident"];
    const TYPE_OF_EMPLOYEE = ["primary", "secondary"];

    return (
        <div className={[]}>
            <div className={["container"]}>
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
                        <div className={[""]}>
                            <div class="mb-3">
                                <label for="dropdownInput" class="form-label">
                                    Type of Return
                                </label>
                                <InputDropdown choices={TYPE_OF_RETURN} />
                            </div>

                            <div class="mb-3">
                                <label for="dropdownInput" class="form-label">
                                    Entity Type
                                </label>
                                <InputDropdown choices={ENTITY_TYPE} />
                            </div>

                            <div class="mb-3">
                                <label for="textInput" class="form-label">
                                    Return Period From
                                </label>
                                <Input
                                    title="DD/MM/YY"
                                    // classes="form-control"
                                    type="date"
                                />
                            </div>

                            <div class="mb-3">
                                <label for="textInput" class="form-label">
                                    Return Period To
                                </label>
                                <Input
                                    title="DD/MM/YY"
                                    // classes="form-control"
                                    type="date"
                                />
                            </div>

                            <div class="mb-3">
                                <label for="textInput" class="form-label">
                                    Pin of Employee
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
                                    Name of Employee
                                </label>

                                <Input
                                    title="textInput"
                                    placeholder="enter name"
                                    // classes="form-control"
                                    type="text"
                                />
                            </div>

                            <div class="mb-3">
                                <label for="dropdownInput" class="form-label">
                                    Residential Status
                                </label>
                                <InputDropdown choices={RESIDENTIAL_STATUS} />
                            </div>

                            <div class="mb-3">
                                <label for="dropdownInput" class="form-label">
                                    Type of Employee
                                </label>
                                <InputDropdown choices={TYPE_OF_EMPLOYEE} />
                            </div>

                            <div class="mb-3">
                                <label for="dropdownInput" class="form-label">
                                    Disability Status
                                </label>
                                <InputDropdown choices={DISABILITY_CHOICE} />
                            </div>

                            <div class="mb-3">
                                <label for="textInput" class="form-label">
                                    Exemption Cert No
                                </label>
                                <Input
                                    title="textInput"
                                    placeholder="1234"
                                    // classes="form-control"
                                    type="text"
                                />
                            </div>

                            <div class="mb-3">
                                <label for="textInput" class="form-label">
                                    Basic Salary
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
                                    House Allowance
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
                                    Transport Allowance
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
                                    Leave Pay
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
                                    Total Tax Due
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
        </div>
    );
};

export default Paye;
