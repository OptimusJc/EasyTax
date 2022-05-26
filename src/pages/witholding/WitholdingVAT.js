import styles from "../paye/paye.module.css";
import stylesW from "./witholding.module.css";
import Input from "../../components/input/Input";
import Footer from "../../components/footer/Footer";
import SidebarNav from "../../components/sidebar_nav/SidebarNav";
import Button from "../../components/button/Button";

// core imports
import { useEffect, useState } from "react";

const WitholdingVAT = () => {
    // //save form entry on the div display
    const [values, setValues] = useState({
        invoiceNumber: 0,
        invoiceAmount: 0,
        paymentDate: "",
    });

    // * higher-order function
    const set = (name) => {
        return ({ target: { value } }) => {
            setValues((oldValues) => ({ ...oldValues, [name]: value }));
        };
    };

    console.log(values);

    const saveForm = (e) => {
        e.preventDefault();

        const resultsUl = document.querySelector("#resultsDiv ul");

        const li = document.createElement("li");
        li.classList.add("list-group-item");
        li.innerText = `${values.invoiceNumber} | ${values.invoiceAmount} | ${values.paymentDate}`;
        resultsUl.appendChild(li);

        console.log(
            `${values.invoiceNumber} | ${values.invoiceAmount} | ${values.paymentDate}`
        );
    };

    useEffect(() => {
        const totalInputField =
            document.querySelectorAll("input[type=number]")[4];
        totalInputField.readOnly = true;
    });

    return (
        <div className="container">
            <div className={["row"]}>
                <SidebarNav />
                <div className={["col", styles.col].join(" ")}>
                    <h3 className={["h3"]}>WITHOLDING VAT</h3>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="textInput" className="form-label">
                                Pin of Withdrawee
                            </label>
                            <Input
                                title="pinOfEmployee"
                                placeholder="1234"
                                value="1234"
                                // classes="form-control"
                                type="text"
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="textInput" className="form-label">
                                Invoice Number
                            </label>

                            <Input
                                title="textInput"
                                placeholder="invoice no"
                                // classes="form-control"
                                type="number"
                                value={values.invoiceNumber}
                                onChange={set("invoiceNumber")}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="textInput" className="form-label">
                                Invoice Amount
                            </label>
                            <Input
                                title="textInput"
                                placeholder="0.00"
                                // classes="form-control"
                                type="number"
                                value={values.invoiceAmount}
                                onChange={set("invoiceAmount")}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="textInput" className="form-label">
                                Payment Date
                            </label>
                            <Input
                                title="dateInput"
                                placeholder="DD/MM/YYYY"
                                // classes="form-control"
                                type="date"
                                value={values.paymentDate}
                                onChange={set("paymentDate")}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="textInput" className="form-label">
                                Total Witholding VAT amount
                            </label>
                            <Input
                                title="textInput"
                                placeholder="0.00"
                                value={0}
                                // classes="form-control"
                                type="number"
                                min="0"
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="textInput" className="form-label">
                                Total Witholding Adjustment amount
                            </label>
                            <Input
                                title="textInput"
                                placeholder="0.00"
                                value={0}
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
                                Total Witholding Tax Payable
                            </label>
                            <Input
                                title="textInput"
                                placeholder="0.00"
                                value={0}
                                // classes="form-control"
                                type="number"
                                min="0"
                            />
                        </div>

                        <div className={["mt-3", stylesW.submit_div].join(" ")}>
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
    );
};

export default WitholdingVAT;
