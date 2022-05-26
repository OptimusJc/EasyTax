import TableRowI from "./TableRowI";
import styles from "../admin.module.css";

const IndividualDashboard = () => {
    return (
        <div className="table-responsive mb-4">
            <table className="table caption-top table-striped table-bordered">
                <caption>Individual Dashboard Section</caption>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Type of Return</th>
                        <th scope="col">Return Period From</th>
                        <th scope="col">Return Period To</th>
                        <th scope="col">Employee Pin</th>
                        <th scope="col">Employee Name</th>
                        <th scope="col">Residential Status</th>
                        <th scope="col">Gross Salary</th>
                        <th scope="col">Allowance & Benefits</th>
                        <th scope="col">Value of Housing</th>
                        <th scope="col">Pension(Excess of 300k)</th>
                        <th scope="col">Employer Pin</th>
                        <th scope="col">Employer Name</th>
                        <th scope="col">Taxable Salary</th>
                        <th scope="col">Tax Charged</th>
                        <th scope="col">Tax Deducted</th>
                        <th scope="col">Personal Relief</th>
                        <th scope="col">Payment Registration No</th>
                        <th scope="col">Date of Deposit</th>
                        <th scope="col">Amount of Income Tax Paid</th>
                        <th scope="col">Total Tax Due</th>
                    </tr>
                </thead>
                <tbody className={styles.tbody}>
                    <TableRowI scopeNumber={1} />
                    <TableRowI scopeNumber={2} />
                    <TableRowI scopeNumber={3} />
                    <TableRowI scopeNumber={4} />
                    <TableRowI scopeNumber={5} />
                    <TableRowI scopeNumber={6} />
                    <TableRowI scopeNumber={7} />
                    <TableRowI scopeNumber={8} />
                    <TableRowI scopeNumber={9} />
                    <TableRowI scopeNumber={10} />
                    <TableRowI scopeNumber={11} />
                    <TableRowI scopeNumber={12} />
                    <TableRowI scopeNumber={13} />
                    <TableRowI scopeNumber={14} />
                    <TableRowI scopeNumber={15} />
                </tbody>
            </table>
        </div>
    );
};

export default IndividualDashboard;
