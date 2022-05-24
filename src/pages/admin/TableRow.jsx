import styles from "./admin.module.css";

const TableRow = ({ scopeNumber }) => {
    return (
        <tr className={styles.tr}>
            <th scope="row">{scopeNumber}</th>
            <td>Original</td>
            <td>01/01/2021</td>
            <td>31/12/2021</td>
            <td>ABCDEFGHIJ</td>
            <td>Primary</td>
            <td>No</td>
            <td>0</td>
            <td>Resident</td>
            <td>150000</td>
            <td>150000</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>ABCDEFGHIJ</td>
            <td>ABCDEFGHIJ</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>ABCDEFGHIJ</td>
            <td>1234</td>
            <td>0</td>
            <td>########</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
        </tr>
    );
};

export default TableRow;
