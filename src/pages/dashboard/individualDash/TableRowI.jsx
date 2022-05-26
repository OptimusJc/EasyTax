// import styles from "./admin.module.css";

const TableRowI = ({ scopeNumber }) => {
    return (
        <tr
        // className={styles.tr}
        >
            <th scope="row">{scopeNumber}</th>
            <td>Original</td>
            <td>01/01/2021</td>
            <td>31/12/2021</td>
            <td>ABCDEFGHIJ</td>
            <td>James Nganga</td>
            <td>Resident</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>ABCDEFGHIJ</td>
            <td>SOMETHING LTD</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>1234567</td>
            <td>MM-DD-YYYY</td>
            <td>0</td>
            <td>0</td>
        </tr>
    );
};

export default TableRowI;
