import Arrow from "./Arrow";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        directionSort: state.tablePage.directionSort
    }
}

const ArrowContainer = connect(mapStateToProps, {})(Arrow);

export default ArrowContainer;