import style from "./Table.module.scss";
import ContactsTableContainer from "./Contacts/ContactsTableContainer";
import UpPanel from "./UpPanel/UpPanel";
import Pagination from "./Pagination/Pagination";
import TitleTableContainer from "./Title/TitleTableContainer";
import UserListContainer from "./UserList/UserListContainer";
import AddUserContainer from "./AddUser/AddUserContainer";

const Table = () => {

    return (
        <>
            <UpPanel/>
            <AddUserContainer/>
            <table className={style.table}>
                <TitleTableContainer/>
                <ContactsTableContainer/>
            </table>
            <Pagination/>
            <UserListContainer/>
        </>
    )
}

export default Table;