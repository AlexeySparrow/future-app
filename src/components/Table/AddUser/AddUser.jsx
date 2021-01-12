import style from './AddUser.module.scss';
import WriteTextContainer from "./WriteText/WriteTextContainer";
import AddUserButtonContainer from "./AddUserButton/AddUserButtonContainer";

const AddUser = (props) => {

    if (props.openPanelAddUser) {
        return (
            <div className={style.addUser}>
                <WriteTextContainer/>
                <AddUserButtonContainer/>
            </div>
        )
    }
    return (
        <div></div>
    )
}

export default AddUser;