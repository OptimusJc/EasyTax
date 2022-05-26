import TableRow from "./TableRow";
import styles from "../admin.module.css";

const PayeDashboard = () => {
    return (
        <div className="table-responsive mb-4">
            <table className="table caption-top table-striped table-bordered">
                <caption>Paye Dashboard section</caption>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Type of Return</th>
                        <th scope="col">Entity Type</th>
                        <th scope="col">Return Period From</th>
                        <th scope="col">Return Period To</th>
                        <th scope="col">Employee Pin</th>
                        <th scope="col">Employee Name</th>
                        <th scope="col">Residential Status</th>
                        <th scope="col">Employee Type</th>
                        <th scope="col">Disability Status</th>
                        <th scope="col">Exemption Cert No</th>
                        <th scope="col">Basic Salary</th>
                        <th scope="col">House Allowance</th>
                        <th scope="col">Transport Allowance</th>
                        <th scope="col">Leave Pay</th>
                        <th scope="col">Total Tax Due</th>
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
    );
};

export default PayeDashboard;
