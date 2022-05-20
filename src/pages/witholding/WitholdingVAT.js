import styles from "../paye/paye.module.css";
import Input from "../../components/input/Input";
import Footer from "../../components/footer/Footer";
import stylesW from "./witholding.module.css";
import SidebarNav from "../../components/sidebar_nav/SidebarNav";

const WitholdingVAT = () => {
    return (
        <div className="container">
            <div className={["row"]}>
                <SidebarNav />
                <div className={["col", styles.col].join(" ")}>
                    <h3 className={["h3"]}>WITHOLDING VAT</h3>
                    <div className={[""]}>
                        <div className="mb-3">
                            <label htmlFor="textInput" className="form-label">
                                Pin of Withdrawee
                            </label>
                            <Input
                                title="pinOfEmployee"
                                placeholder="1234"
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
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="textInput" className="form-label">
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

                        <div className="mb-3">
                            <label htmlFor="textInput" className="form-label">
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
