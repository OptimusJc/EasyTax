import styles from "./admin.module.css";
import TableRow from "./TableRow";
import Button from "../../components/button/Button.js";

const Admin = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className={["col", styles.admin_col].join(" ")}>
                    <p className="fs-4">Admin Panel</p>
                    <div className="table-responsive mb-4">
                        <table className="table caption-top table-striped table-bordered">
                            <caption>Show list of filed users</caption>
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Type of Return</th>
                                    <th scope="col">Return Period From</th>
                                    <th scope="col">Return Period To</th>
                                    <th scope="col">Employee Pin</th>
                                    <th scope="col">Employee Type</th>
                                    <th scope="col">Disability Status</th>
                                    <th scope="col">Exemption Cert No</th>
                                    <th scope="col">Residential Status</th>
                                    <th scope="col">Basic Salary</th>
                                    <th scope="col">Gross Salary</th>
                                    <th scope="col">House Allowance</th>
                                    <th scope="col">Allowances & Benefits</th>
                                    <th scope="col">Pension(Excess of 300k)</th>
                                    <th scope="col">Leave Pay</th>
                                    <th scope="col">Employer Pin</th>
                                    <th scope="col">Employer Name</th>
                                    <th scope="col">Tax Charged</th>
                                    <th scope="col">Tax Deducted</th>
                                    <th scope="col">Personal Relief</th>
                                    <th scope="col">Payment Registration No</th>
                                    <th scope="col">
                                        Amount of IncomeTax Paid
                                    </th>
                                    <th scope="col">Withdrawee Pin</th>
                                    <th scope="col">Invoice Number</th>
                                    <th scope="col">Invoice Amount</th>
                                    <th scope="col">Payment Date</th>
                                    <th scope="col">Witholding VAT Amnt</th>
                                    <th scope="col">
                                        Witholding Adjustment Amnt
                                    </th>
                                    <th scope="col">
                                        Total Witholding Tax Payable{" "}
                                    </th>
                                </tr>
                            </thead>
                            <tbody className={styles.tbody}>
                                <TableRow scopeNumber={1} />
                                <TableRow scopeNumber={2} />
                                <TableRow scopeNumber={3} />
                                <TableRow scopeNumber={4} />
                                <TableRow scopeNumber={5} />
                                <TableRow scopeNumber={6} />
                                <TableRow scopeNumber={7} />
                                <TableRow scopeNumber={8} />
                                <TableRow scopeNumber={9} />
                                <TableRow scopeNumber={10} />
                                <TableRow scopeNumber={11} />
                                <TableRow scopeNumber={12} />
                                <TableRow scopeNumber={13} />
                                <TableRow scopeNumber={14} />
                                <TableRow scopeNumber={15} />
                            </tbody>
                        </table>
                    </div>

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
