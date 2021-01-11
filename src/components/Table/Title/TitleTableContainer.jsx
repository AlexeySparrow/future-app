import {connect} from "react-redux";
import TitleTable from "./TitleTable";
import {setDirectionSort, setFieldArrow, setUsers} from "../../../redux/tableReducer";
import React from 'react';

class TitleTableLogic extends React.Component {

    sortData = (field) => {
        const copyUsers = this.props.tablePage.users.concat();
        let sortUsers;

        if (this.props.directionSort) {
            copyUsers.sort(
                (a, b) => {
                    return a[field] > b[field] ? 1 : -1
                });
        }
        sortUsers = copyUsers.reverse(
            (a, b) => {
                return a[field] > b[field] ? 1 : -1
            });

        this.props.setUsers(sortUsers)
        this.props.setDirectionSort(!this.props.directionSort);
    }

    fieldSortArrow = (field) => {
        this.sortData(field)
        this.props.setFieldArrow(field)
    }

    render() {
        return <TitleTable
            {...this.props}
            fieldSortArrow={this.fieldSortArrow}
        />;
    }
}

let mapStateToProps = (state) => {
    return {
        tablePage: state.tablePage,
        directionSort: state.tablePage.directionSort,
        fieldArrow: state.tablePage.fieldArrow
    }
}

const TitleTableContainer = connect(mapStateToProps, {
    setUsers,
    setDirectionSort,
    setFieldArrow
})(TitleTableLogic);

export default TitleTableContainer;