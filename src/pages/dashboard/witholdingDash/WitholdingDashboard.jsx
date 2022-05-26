import TableRowW from "./TableRowW";
import styles from "../admin.module.css";

const WitholdingDashboard = () => {
    return (
        <div className="table-responsive mb-4">
            <table className="table caption-top table-striped table-bordered">
                <caption>Witholding Dashboard Section</caption>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Withdrawee Pin</th>
                        <th scope="col">Invoice Number</th>
                        <th scope="col">Invoice Amount</th>
                        <th scope="col">Payment Date</th>
                        <th scope="col">Total Witholding VAT</th>
                        <th scope="col">Total Witholding Adjustment</th>
                        <th scope="col">Total Witholding Tax(Payable)</th>
                    </tr>
                </thead>
                <tbody className={styles.tbody}>
                    <TableRowW scopeNumber={1} />
                    <TableRowW scopeNumber={2} />
                    <TableRowW scopeNumber={3} />
                    <TableRowW scopeNumber={4} />
                    <TableRowW scopeNumber={5} />
                    <TableRowW scopeNumber={6} />
                    <TableRowW scopeNumber={7} />
                    <TableRowW scopeNumber={8} />
                    <TableRowW scopeNumber={9} />
                    <TableRowW scopeNumber={10} />
                    <TableRowW scopeNumber={11} />
                    <TableRowW scopeNumber={12} />
                    <TableRowW scopeNumber={13} />
                    <TableRowW scopeNumber={14} />
                    <TableRowW scopeNumber={15} />
                </tbody>
            </table>
        </div>
    );
};

export default WitholdingDashboard;
