import styles from "./paye.module.css";
import stylesW from "../witholding/witholding.module.css";
import InputDropdown from "../../components/input/InputDropdown";
import Input from "../../components/input/Input";
import Footer from "../../components/footer/Footer";
import SidebarNav from "../../components/sidebar_nav/SidebarNav";
import { React, useEffect, useState } from "react";

const Paye = () => {
    const DISABILITY_CHOICE = ["no", "yes"];
    const TYPE_OF_RETURN = ["original", "amended"];
    const ENTITY_TYPE = ["head office", "branch"];
    const RESIDENTIAL_STATUS = ["resident", "non-resident"];
    const TYPE_OF_EMPLOYEE = ["primary", "secondary"];

    // states
    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        const dropdownChoice = document.querySelectorAll("select")[4];
        const exemptionField = document.querySelectorAll("input")[4];
        const totalDue = document.querySelectorAll("input")[9];
        totalDue.readOnly = true;
        exemptionField.disabled = disabled;

        // check if disabled is true: if true enable the exemption cert field
        dropdownChoice.onchange = function (e) {
            if (e.target.value === "0") {
                exemptionField.disabled = true;
            } else if (e.target.value === "1") {
                exemptionField.disabled = false;
                setDisabled(false);
            }
        };
    });

    return (
        <div className={[]}>
            <div className={["container"]}>
                <div className={["row"]}>
                    <SidebarNav />
                    <div className={["col", styles.col].join(" ")}>
                        <h3 className={["h3"]}>PAYE</h3>
                        <form className={[""]}>
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
                                    htmlFor="dropdownInput"
                                    className="form-label"
                                >
                                    Entity Type
                                </label>
                                <InputDropdown choices={ENTITY_TYPE} />
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

                            <div className="mb-3">
                                <label
                                    htmlFor="dropdownInput"
                                    className="form-label"
                                >
                                    Type of Employee
                                </label>
                                <InputDropdown choices={TYPE_OF_EMPLOYEE} />
                            </div>

                            <div className="mb-3">
                                <label
                                    htmlFor="dropdownInput"
                                    className="form-label"
                                >
                                    Disability Status
                                </label>
                                <InputDropdown choices={DISABILITY_CHOICE} />
                            </div>

                            <div className="mb-3">
                                <label
                                    htmlFor="textInput"
                                    className="form-label"
                                >
                                    Exemption Cert No
                                </label>
                                <Input
                                    title="textInput"
                                    placeholder="1234"
                                    type="text"
                                />
                            </div>

                            <div className="mb-3">
                                <label
                                    htmlFor="textInput"
                                    className="form-label"
                                >
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

                            <div className="mb-3">
                                <label
                                    htmlFor="textInput"
                                    className="form-label"
                                >
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

                            <div className="mb-3">
                                <label
                                    htmlFor="textInput"
                                    className="form-label"
                                >
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

                            <div className="mb-3">
                                <label
                                    htmlFor="textInput"
                                    className="form-label"
                                >
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
                                    min="0"
                                />
                            </div>
                        </form>
                    </div>

                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default Paye;
