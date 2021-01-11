import {connect} from "react-redux";
import ButtonSearch from "./ButtonSearch";
import {updateOnSearch} from "../../../../redux/tableReducer";

let mapStateToProps = (state) => {
    return {
        newRequestSearch: state.tablePage.newRequestSearch
    }
}

const ButtonSearchContainer = connect(mapStateToProps, {updateOnSearch})(ButtonSearch);

export default ButtonSearchContainer;