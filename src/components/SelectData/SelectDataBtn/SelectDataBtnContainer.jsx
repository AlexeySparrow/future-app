import SelectDataBtn from "./SelectDataBtn";
import {setBigServerData, setSmallServerData} from "../../../redux/tableReducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        bigServerData: state.tablePage.bigServerData,
        smallServerData: state.tablePage.smallServerData
    }
}

const SelectDataBtnContainer = connect(mapStateToProps, {setBigServerData, setSmallServerData})(SelectDataBtn);

export default SelectDataBtnContainer;
