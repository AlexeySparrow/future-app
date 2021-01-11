import style from './WriteText.module.css';

const WriteText = (props) => {

    let onNewIdChange = (e) => {
        let body = e.target.value;
        props.updateTextPageAddUserId(body);
    }
    let onNewFirstNameChange = (e) => {
        let body = e.target.value;
        props.updateTextPageAddUserFirstName(body);
    }
    let onNewLastNameChange = (e) => {
        let body = e.target.value;
        props.updateTextPageAddUserLastName(body);
    }
    let onNewEmailChange = (e) => {
        let body = e.target.value;
        props.updateTextPageAddUserEmail(body);
    }
    let onNewPhoneChange = (e) => {
        let body = e.target.value;
        props.updateTextPageAddUserPhone(body);
    }

    return (
        <div className={style.container}>
            <div className={style.box}>
                <label> Id </label>
                <input className={style.input}
                       type="number"
                       placeholder='write in...'
                       value={props.tablePage.newTextPageAddUserId}
                       onChange={onNewIdChange}
                />
            </div>
            <div className={style.box}>
                <label> First Name </label>
                <input className={style.input}
                       type="text"
                       placeholder='write in...'
                       value={props.tablePage.newTextPageAddUserFirstName}
                       onChange={onNewFirstNameChange}
                />

            </div>
            <div className={style.box}>
                <label> Last Name </label>
                <input className={style.input}
                       type="text"
                       placeholder='write in...'
                       value={props.tablePage.newTextPageAddUserLastName}
                       onChange={onNewLastNameChange}
                />
            </div>
            <div className={style.box}>
                <label> Email </label>
                <input className={style.input}
                       type="email"
                       placeholder='write in...'
                       value={props.tablePage.newTextPageAddUserEmail}
                       onChange={onNewEmailChange}
                />
            </div>
            <div className={style.box}>
                <label> Phone </label>
                <input className={style.input}
                       type="tel"
                       placeholder='write in...'
                       value={props.tablePage.newTextPageAddUserPhone}
                       onChange={onNewPhoneChange}
                />
            </div>
        </div>
    )
}

export default WriteText;