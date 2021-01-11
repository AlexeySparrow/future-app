import WriteText from "./WriteText";
import {connect} from "react-redux";
import {
    updateTextPageAddUserEmail,
    updateTextPageAddUserFirstName,
    updateTextPageAddUserId,
    updateTextPageAddUserLastName,
    updateTextPageAddUserPhone
} from "../../../../redux/tableReducer";

let mapStateToProps = (state) => {
    return {
        tablePage: state.tablePage
    }
}

const WriteTextContainer = connect(mapStateToProps, {
    updateTextPageAddUserId,
    updateTextPageAddUserFirstName,
    updateTextPageAddUserLastName,
    updateTextPageAddUserEmail,
    updateTextPageAddUserPhone
})(WriteText);

export default WriteTextContainer;