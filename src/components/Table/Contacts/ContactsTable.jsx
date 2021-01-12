import style from "./ContactsTable.module.scss";

const ContactsTable = (props) => {

    let detailUser = props.setDetailUser;
    detailUser = (row) => {
        props.setRowUser(row)
    }

    return (
        <tbody>
        {
            props.currentBlockRows.map((user, index) =>
                <tr className={style.contactsTable} onClick={() => {
                    detailUser(user)
                }} key={index}>
                    <td>{user.id}</td>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                </tr>
            )
        }
        </tbody>
    )
}

export default ContactsTable;