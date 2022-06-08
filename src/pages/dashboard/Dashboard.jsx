import styles from "./admin.module.css";
import Button from "../../components/button/Button.js";
import PayeDashboard from "./payeDash/PayeDashboard";
import WitholdingDashboard from "./witholdingDash/WitholdingDashboard";
import IndividualDashboard from "./individualDash/IndividualDashboard";

import { useState } from "react";
import { Link } from "react-router-dom";

import { BiSearch } from "react-icons/bi";
import { TiFilter } from "react-icons/ti";
import Input from "../../components/input/Input";

const Admin = () => {
    const [selection, setSelection] = useState("");

    return (
        <div className="container-fluid">
            <div className="row">
                <div className={["col", styles.admin_col].join(" ")}>
                    <p className="fs-4">Dashboard Panel</p>
                    <p className={styles.balance}>Balance 5000ksh</p>
                    <div className={styles.dash}>
                        <p>Dashboard Select</p>
                        {/* <div className={styles.search_box}>
                            <Input
                                type="text"
                                placeholder="search here..."
                                classes={styles.search_text}
                            />
                            <Button
                                classes={styles.search_button}
                                title="Search"
                            >
                                <TiFilter className={styles.filter_icon} />
                            </Button>
                            <BiSearch className={styles.search_icon} />
                        </div> */}

                        <div className={styles.search_area}>
                            <p>Filter options</p>
                            <div>
                                <Input
                                    type="date"
                                    name="startDate"
                                    classes={styles.date}
                                />
                                <Input
                                    type="date"
                                    name="endDate"
                                    classes={styles.date}
                                />
                                <Button
                                    title="Search"
                                    classes={styles.search_button}
                                >
                                    <TiFilter className={styles.filter_icon} />
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className={styles.inputDiv}>
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
                                <Link to="/witholding-dash">
                                    Witholding VAT
                                </Link>
                            </option>
                            <option value="individual">
                                <Link to="/individual-dash">Individual</Link>
                            </option>
                        </select>
                        <div className={styles.fileInputDiv}>
                            <label htmlFor="fileInput">Import csv file</label>
                            <input
                                type="file"
                                id="fileInput"
                                className={styles.input}
                            />
                        </div>
                    </div>

                    {selection === "paye" ? <PayeDashboard /> : ""}
                    {selection === "witholding" ? <WitholdingDashboard /> : ""}
                    {selection === "individual" ? <IndividualDashboard /> : ""}

                    <div className={styles.btn_div}>
                        <Button
                            classes="btn btn-outline-primary"
                            title="Download csv"
                        />
                        <div>
                            <Button
                                title="Delete"
                                classes={[
                                    "btn btn-secondary",
                                    styles.btn_delete,
                                ].join(" ")}
                            />
                            <Button
                                title="Submit"
                                classes={[
                                    "btn btn-danger",
                                    styles.btn_submit,
                                ].join(" ")}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;
