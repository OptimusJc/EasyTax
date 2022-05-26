import styles from "../admin.module.css";

const TableRowW = ({ scopeNumber }) => {
    return (
        <tr className={styles.tr}>
            <th scope="row">{scopeNumber}</th>
            <td>ABCDEFGHIJ</td>
            <td>1234</td>
            <td>0</td>
            <td>MM-DD-YYYY</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
        </tr>
    );
};

export default TableRowW;
