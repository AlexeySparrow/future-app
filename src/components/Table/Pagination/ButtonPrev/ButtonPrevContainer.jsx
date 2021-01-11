import {connect} from "react-redux";
import ButtonPrev from "./ButtonPrev";
import {setCurrentButton} from "../../../../redux/tableReducer";


let mapStateToProps = (state) => {
    return {
        currentButton: state.tablePage.currentButton
    }
}

const ButtonPrevContainer = connect(mapStateToProps, {setCurrentButton})(ButtonPrev);

export default ButtonPrevContainer;