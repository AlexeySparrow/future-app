import {connect} from "react-redux";
import ButtonAddUser from "./ButtonAddUser";
import {setOpenPanelAddUser} from "../../../../redux/tableReducer";

let mapStateToProps = (state) => {
    return {
        openPanelAddUser: state.tablePage.openPanelAddUser
    }
}

const ButtonAddUserContainer = connect(mapStateToProps, {setOpenPanelAddUser})(ButtonAddUser);

export default ButtonAddUserContainer;