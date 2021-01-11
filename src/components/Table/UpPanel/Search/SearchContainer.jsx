import {connect} from "react-redux";
import Search from "./Search";
import {updateTextRequestSearch} from "../../../../redux/tableReducer";

let mapStateToProps = (state) => {
    return {
        newRequestSearch: state.tablePage.newRequestSearch,
        users: state.tablePage.users
    }
}

const SearchContainer = connect(mapStateToProps, {updateTextRequestSearch})(Search);

export default SearchContainer;