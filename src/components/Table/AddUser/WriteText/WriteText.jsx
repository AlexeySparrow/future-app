import style from './WriteText.module.scss';

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
        <div className={style.writeText}>
            <div>
                <label> Id </label>
                <input type="number"
                       placeholder='write in...'
                       value={props.tablePage.newTextPageAddUserId}
                       onChange={onNewIdChange}
                />
            </div>
            <div>
                <label> First Name </label>
                <input type="text"
                       placeholder='write in...'
                       value={props.tablePage.newTextPageAddUserFirstName}
                       onChange={onNewFirstNameChange}
                />

            </div>
            <div>
                <label> Last Name </label>
                <input type="text"
                       placeholder='write in...'
                       value={props.tablePage.newTextPageAddUserLastName}
                       onChange={onNewLastNameChange}
                />
            </div>
            <div>
                <label> Email </label>
                <input type="email"
                       placeholder='write in...'
                       value={props.tablePage.newTextPageAddUserEmail}
                       onChange={onNewEmailChange}
                />
            </div>
            <div>
                <label> Phone </label>
                <input type="tel"
                       placeholder='write in...'
                       value={props.tablePage.newTextPageAddUserPhone}
                       onChange={onNewPhoneChange}
                />
            </div>
        </div>
    )
}

export default WriteText;