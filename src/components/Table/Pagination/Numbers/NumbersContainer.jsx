import React from 'react';
import {connect} from "react-redux";
import Numbers from "./Numbers";
import {setCurrentBlockRows, setCurrentButton} from "../../../../redux/tableReducer";

class NumbersLogic extends React.Component {

    /* filter */
    filteredData = () => {
        if (!this.props.onSearch) {
            return this.props.users
        }
        return this.props.users.filter(
            element => {
                return element['firstName'].toLowerCase().includes(this.props.onSearch.toLowerCase())
                    || element['lastName'].toLowerCase().includes(this.props.onSearch.toLowerCase())
                    || element['email'].toLowerCase().includes(this.props.onSearch.toLowerCase())
                    || element['phone'].includes(this.props.onSearch)
            }
        )
    }


    /* ---------------- */

    componentDidUpdate() {
        let lastBlockRow = this.props.currentButton * this.props.maxUsersOnPage;
        let firstBlockRow = lastBlockRow - this.props.maxUsersOnPage;
        this.props.setCurrentBlockRows(this.filteredData().slice(firstBlockRow, lastBlockRow));
    }

    render() {
        return <Numbers
            {...this.props}
            filteredData={this.filteredData}
        />;
    }
}

let mapStateToProps = (state) => {
    return {
        currentButton: state.tablePage.currentButton,
        arrayNumbers: state.tablePage.arrayNumbers,
        users: state.tablePage.users,
        maxUsersOnPage: state.tablePage.maxUsersOnPage,
        newRequestSearch: state.tablePage.newRequestSearch,
        dotsRight: state.tablePage.dotsRight,
        dotsLeft: state.tablePage.dotsLeft,
        onSearch: state.tablePage.onSearch
    }
}

const NumbersContainer = connect(mapStateToProps, {setCurrentButton, setCurrentBlockRows})(NumbersLogic);

export default NumbersContainer;