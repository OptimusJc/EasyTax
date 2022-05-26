import styles from "./admin.module.css";
import Button from "../../components/button/Button.js";
import PayeDashboard from "./payeDash/PayeDashboard";
import WitholdingDashboard from "./witholdingDash/WitholdingDashboard";
import IndividualDashboard from "./individualDash/IndividualDashboard";

import { useState } from "react";
import { Link } from "react-router-dom";

const Admin = () => {
    const [selection, setSelection] = useState("");

    return (
        <div className="container-fluid">
            <div className="row">
                <div className={["col", styles.admin_col].join(" ")}>
                    <p className="fs-4">Dashboard Panel</p>
                    <p>Dashboard Select</p>
                    <select
                        className={["form-select", styles.select].join(" ")}
                        aria-label="Default select"
                        value={selection}
                        onChange={(e) => {
                            const selectedSelection = e.target.value;
                            setSelection(selectedSelection);
                        }}
                    >
                        <option value="paye">
                            <Link to="/paye-dash">PAYE</Link>
                        </option>
                        <option value="witholding">
                            <Link to="/witholding-dash">Witholding VAT</Link>
                        </option>
                        <option value="individual">
                            <Link to="/individual-dash">Individual</Link>
                        </option>
                    </select>

                    {selection === "paye" ? <PayeDashboard /> : ""}
                    {selection === "witholding" ? <WitholdingDashboard /> : ""}
                    {selection === "individual" ? <IndividualDashboard /> : ""}

                    <div className={styles.btn_div}>
                        <Button
                            title="Delete"
                            classes={[
                                "btn btn-secondary",
                                styles.btn_delete,
                            ].join(" ")}
                        />
                        <Button
                            title="Submit"
                            classes={["btn btn-danger", styles.btn_submit].join(
                                " "
                            )}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;
