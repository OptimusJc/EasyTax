// core imports
import { useEffect } from "react";

// styles imports
import stylesI from "./individual.module.css";
import styles from "../paye/paye.module.css";
import stylesW from "../witholding/witholding.module.css";

// components imports
import Input from "../../components/input/Input";
import InputDropdown from "../../components/input/InputDropdown";
import Footer from "../../components/footer/Footer";
import SidebarNav from "../../components/sidebar_nav/SidebarNav";
import Button from "../../components/button/Button";

const IndividualTax = () => {
    const TYPE_OF_RETURN = ["original", "amended"];
    const RESIDENTIAL_STATUS = ["resident", "non-resident"];

    useEffect(() => {
        const totalInputField =
            document.querySelectorAll("input[type=number]")[10];
        totalInputField.readOnly = true;
    });

    return (
        <div className={[]}>
            <div className={["container"]}>
                <div className={["row"]}>
                    <SidebarNav />

                    <div className={["col", "col-md-6", styles.col].join(" ")}>
                        <h3 className={["h3"]}>INDIVIDUAL</h3>
                        <form>
                            <div className="mb-3">
                                <label
                                    htmlFor="dropdownInput"
                                    className="form-label"
                                >
                                    Type of Return
                                </label>
                                <InputDropdown choices={TYPE_OF_RETURN} />
                            </div>

                            <div className="mb-3">
                                <label
                                    htmlFor="textInput"
                                    className="form-label"
                                >
                                    Return Period From
                                </label>
                                <Input
                                    title="DD/MM/YY"
                                    // classes="form-control"
                                    type="date"
                                />
                            </div>

                            <div className="mb-3">
                                <label
                                    htmlFor="textInput"
                                    className="form-label"
                                >
                                    Return Period To
                                </label>
                                <Input
                                    title="DD/MM/YY"
                                    // classes="form-control"
                                    type="date"
                                />
                            </div>

                            <div className="mb-3">
                                <label
                                    htmlFor="textInput"
                                    className="form-label"
                                >
                                    Pin of Employee
                                </label>
                                <Input
                                    title="pinOfEmployee"
                                    placeholder="1234"
                                    // classes="form-control"
                                    type="text"
                                />
                            </div>

                            <div className="mb-3">
                                <label
                                    htmlFor="textInput"
                                    className="form-label"
                                >
                                    Name of Employee
                                </label>

                                <Input
                                    title="textInput"
                                    placeholder="enter name"
                                    // classes="form-control"
                                    type="text"
                                />
                            </div>

                            <div className="mb-3">
                                <label
                                    htmlFor="dropdownInput"
                                    className="form-label"
                                >
                                    Residential Status
                                </label>
                                <InputDropdown choices={RESIDENTIAL_STATUS} />
                            </div>

                            <p
                                className={[
                                    "display-4",
                                    stylesI.display_4,
                                ].join(" ")}
                            >
                                employment income
                            </p>

                            <div className="mb-3">
                                <label
                                    htmlFor="textInput"
                                    className="form-label"
                                >
                                    Gross Salary
                                </label>
                                <Input
                                    title="textInput"
                                    placeholder="0.00"
                                    // classes="form-control"
                                    type="number"
                                    min="0"
                                />
                            </div>

                            <div className="mb-3">
                                <label
                                    htmlFor="textInput"
                                    className="form-label"
                                >
                                    Allowance & Benefits
                                </label>
                                <Input
                                    title="textInput"
                                    placeholder="0.00"
                                    // classes="form-control"
                                    type="number"
                                    min="0"
                                />
                            </div>

                            <div className="mb-3">
                                <label
                                    htmlFor="textInput"
                                    className="form-label"
                                >
                                    Value of Housing
                                </label>
                                <Input
                                    title="textInput"
                                    placeholder="0.00"
                                    // classes="form-control"
                                    type="number"
                                    min="0"
                                />
                            </div>

                            <div className="mb-3">
                                <label
                                    htmlFor="textInput"
                                    className="form-label"
                                >
                                    Pension(If in excess of 300,000ksh)
                                </label>
                                <Input
                                    title="textInput"
                                    placeholder="0.00"
                                    // classes="form-control"
                                    type="number"
                                    min="0"
                                />
                            </div>

                            <p
                                className={[
                                    "display-4",
                                    stylesI.display_4,
                                ].join(" ")}
                            >
                                details of paye deducted
                            </p>
                            <div className="mb-3">
                                <label
                                    htmlFor="textInput"
                                    className="form-label"
                                >
                                    Pin of Employer
                                </label>
                                <Input
                                    title="textInput"
                                    placeholder="1234"
                                    // classes="form-control"
                                    type="text"
                                />
                            </div>

                            <div className="mb-3">
                                <label
                                    htmlFor="textInput"
                                    className="form-label"
                                >
                                    Name of Employer
                                </label>
                                <Input
                                    title="textInput"
                                    placeholder="name"
                                    // classes="form-control"
                                    type="text"
                                />
                            </div>

                            <div className="mb-3">
                                <label
                                    htmlFor="textInput"
                                    className="form-label"
                                >
                                    Taxable Salary
                                </label>
                                <Input
                                    title="textInput"
                                    placeholder="0.00"
                                    // classes="form-control"
                                    type="number"
                                />
                            </div>

                            <div className="mb-3">
                                <label
                                    htmlFor="textInput"
                                    className="form-label"
                                >
                                    Tax Charged(Tax payable on taxable salary)
                                </label>
                                <Input
                                    title="textInput"
                                    placeholder="0.00"
                                    // classes="form-control"
                                    type="number"
                                />
                            </div>

                            <div className="mb-3">
                                <label
                                    htmlFor="textInput"
                                    className="form-label"
                                >
                                    Amount of Tax Deducted
                                </label>
                                <Input
                                    title="textInput"
                                    placeholder="0.00"
                                    // classes="form-control"
                                    type="number"
                                    min="0"
                                />
                            </div>

                            <div className="mb-3">
                                <label
                                    htmlFor="textInput"
                                    className="form-label"
                                >
                                    Personal Relief
                                </label>
                                <Input
                                    title="textInput"
                                    placeholder="0.00"
                                    // classes="form-control"
                                    type="number"
                                />
                            </div>

                            <div className="mb-3">
                                <label
                                    htmlFor="textInput"
                                    className="form-label"
                                >
                                    Pension
                                </label>
                                <Input
                                    title="textInput"
                                    placeholder="0.00"
                                    // classes="form-control"
                                    type="number"
                                    min="0"
                                />
                            </div>

                            <p
                                className={[
                                    "display-4",
                                    stylesI.display_4,
                                ].join(" ")}
                            >
                                it payment credits
                            </p>
                            <div className="mb-3">
                                <label
                                    htmlFor="textInput"
                                    className="form-label"
                                >
                                    Payment Registration No
                                </label>
                                <Input
                                    title="textInput"
                                    placeholder="1234"
                                    // classes="form-control"
                                    type="text"
                                />
                            </div>

                            <div className="mb-3">
                                <label
                                    htmlFor="textInput"
                                    className="form-label"
                                >
                                    Date of Deposit
                                </label>
                                <Input
                                    title="dateInput"
                                    placeholder="DD/MM/YY"
                                    // classes="form-control"
                                    type="date"
                                />
                            </div>

                            <div className="mb-3">
                                <label
                                    htmlFor="textInput"
                                    className="form-label"
                                >
                                    Amount of Income Tax Paid(ksh)
                                </label>
                                <Input
                                    title="textInput"
                                    placeholder="0.00"
                                    // classes="form-control"
                                    type="number"
                                    min="0"
                                />
                            </div>

                            <div className="mb-3">
                                <label
                                    htmlFor="textInput"
                                    className={[
                                        "form-label",
                                        stylesW.total_label,
                                    ].join(" ")}
                                >
                                    Total Tax Due
                                </label>
                                <Input
                                    title="textInput"
                                    placeholder="0.00"
                                    // classes="form-control"
                                    type="number"
                                />
                            </div>

                            <div
                                className={["mt-3", stylesW.submit_div].join(
                                    " "
                                )}
                            >
                                <Button
                                    title="Submit"
                                    classes={[
                                        "btn btn-danger",
                                        stylesW.submit_button,
                                    ].join(" ")}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IndividualTax;
