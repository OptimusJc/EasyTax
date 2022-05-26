import styles from "../admin.module.css";

const TableRow = ({ scopeNumber }) => {
    return (
        <tr className={styles.tr}>
            <th scope="row">{scopeNumber}</th>
            <td>Original</td>
            <td>Head Office</td>
            <td>MM-DD-YYYY</td>
            <td>MM-DD-YYYY</td>
            <td>ABCDEFGHIJ</td>
            <td>John Njuguna</td>
            <td>Resident</td>
            <td>Primary</td>
            <td>No</td>
            <td>1234</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
        </tr>
    );
};

export default TableRow;
