import style from './UserList.module.scss';

const UserList = (props) => {

    const addressCity = props.rowUser && props.rowUser.address ? props.rowUser.address.city : null
    const addressStreet = props.rowUser && props.rowUser.address ? props.rowUser.address.streetAddress : null
    const addressState = props.rowUser && props.rowUser.address ? props.rowUser.address.state : null
    const addressIndex = props.rowUser && props.rowUser.address ? props.rowUser.address.zip : null


    return (
        <div className={style.userList}>
            <div>User: <span> {props.rowUser.firstName} {props.rowUser.lastName} </span></div>
            <div>Description: <span> {props.rowUser.description} </span></div>
            <div>Address: <span> {addressStreet} </span></div>
            <div>City: <span> {addressCity} </span></div>
            <div>State: <span> {addressState} </span></div>
            <div>Index: <span> {addressIndex} </span></div>
        </div>
    )
}

export default UserList;