import React from 'react';
import {connect} from "react-redux";
import ContactsTable from "./ContactsTable";
import {
    setDetailUser,
    setRowUser,
    setUsers,
    toggleIsFetching
} from "../../../redux/tableReducer";
import * as axios from 'axios';
import DownloadRing from "../../DownloadRing/DownloadRing";

export class ContactsTableDataServer extends React.Component {

    componentDidMount() {
        const smallData = 'https://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';
        const bigData = 'https://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';

        this.props.toggleIsFetching(true);

        let dataLoading = (data) => {
            axios.get(data)
                .then(response => {
                    this.props.toggleIsFetching(false)
                    this.props.setUsers(response.data)
                });
        }

        if (this.props.bigServerData) {
            dataLoading(bigData)
        } else if (this.props.smallServerData) {
            dataLoading(smallData)
        }
    }

    render() {
        return <>
            {this.props.isFetching
                ? <tbody>
                <tr>
                    <td>
                        <DownloadRing/>
                    </td>
                </tr>
                </tbody>
                : null}
            <ContactsTable {...this.props}/>
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        tablePage: state.tablePage,
        isFetching: state.tablePage.isFetching,
        bigServerData: state.tablePage.bigServerData,
        smallServerData: state.tablePage.smallServerData,
        currentBlockRows: state.tablePage.currentBlockRows
    }
}

const ContactsTableContainer = connect(mapStateToProps, {
    setUsers,
    toggleIsFetching,
    setDetailUser,
    setRowUser,
})(ContactsTableDataServer);

export default ContactsTableContainer;