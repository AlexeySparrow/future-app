import {connect} from "react-redux";
import ButtonNext from "./ButtonNext";
import {setCurrentButton} from "../../../../redux/tableReducer";


let mapStateToProps = (state) => {
    return {
        currentButton: state.tablePage.currentButton,
    }
}

const ButtonNextContainer = connect(mapStateToProps, {setCurrentButton})(ButtonNext);

export default ButtonNextContainer;