import stylesI from "./individual.module.css";
import Input from "../../components/input/Input";
import InputDropdown from "../../components/input/InputDropdown";
import Footer from "../../components/footer/Footer";
import styles from "../paye/paye.module.css";
import SidebarNav from "../../components/sidebar_nav/SidebarNav";

const IndividualTax = () => {
    const TYPE_OF_RETURN = ["original", "amended"];
    const RESIDENTIAL_STATUS = ["resident", "non-resident"];

    return (
        <div className={[]}>
            <div className={["container"]}>
                <div className={["row"]}>
                    <SidebarNav />

                    <div className={["col", "col-md-6", styles.col].join(" ")}>
                        <h3 className={["h3"]}>INDIVIDUAL</h3>
                        <div className={[""]}>
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
                                    className="form-label"
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
                        </div>
                    </div>

                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default IndividualTax;
