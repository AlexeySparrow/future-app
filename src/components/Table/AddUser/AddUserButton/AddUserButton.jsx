import style from './AddUserButton.module.scss';

const AddUserButton = (props) => {

    let onSendNewUserClick = () => {
        props.setSendNewUser()
    };

    // eslint-disable-next-line no-sequences
    if (!props.tablePage.newTextPageAddUserId,
        !props.tablePage.newTextPageAddUserFirstName,
        !props.tablePage.newTextPageAddUserLastName,
        !props.tablePage.newTextPageAddUserEmail,
        !props.tablePage.newTextPageAddUserPhone
    ) {
        return <button
            className={style.addBtnClose}
        >Add</button>
    }
    return <button
        className={style.addBtn}
        onClick={onSendNewUserClick}
    >Add</button>
}

export default AddUserButton;