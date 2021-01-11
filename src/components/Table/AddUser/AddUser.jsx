import style from './AddUser.module.css';
import WriteTextContainer from "./WriteText/WriteTextContainer";
import AddUserButtonContainer from "./AddUserButton/AddUserButtonContainer";

const AddUser = (props) => {

    if (props.openPanelAddUser) {
        return (
            <div className={style.container}>
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