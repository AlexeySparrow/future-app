import UserList from "./UserList";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        rowUser: state.tablePage.rowUser
    }
}

const UserListContainer = connect(mapStateToProps, {})(UserList);

export default UserListContainer;