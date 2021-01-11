import {connect} from "react-redux";
import AddUserButton from "./AddUserButton";
import {setSendNewUser} from "../../../../redux/tableReducer";

let mapStateToProps = (state) => {
    return{
        tablePage:state.tablePage
    }
}

const AddUserButtonContainer = connect(mapStateToProps,{setSendNewUser})(AddUserButton);

export default AddUserButtonContainer;