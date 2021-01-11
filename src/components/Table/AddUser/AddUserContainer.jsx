import AddUser from "./AddUser";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        openPanelAddUser: state.tablePage.openPanelAddUser
    }
}

const AddUserContainer = connect(mapStateToProps, {})(AddUser);

export default AddUserContainer;