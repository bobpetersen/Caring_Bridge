import React, { Component } from 'react';
import { connect } from "react-redux";
import { SCAN_ACTIONS } from '../../redux/actions/scanActions';
import moment from 'moment';

const mapStateToProps = reduxState => ({
    scanReducer: reduxState.scanReducer
});
class RunDashboardData extends Component {
    componentDidMount() {
        this.props.dispatch({ type: SCAN_ACTIONS.FETCH_SCAN });
    }
    render() {
        const date = this.props.scanReducer.scanInfo.scanTime
        const dateFormat = moment(date).format('MM/DD LT');

        return (
            <div id="dashScanRun">
                <div className="DashboardData">{dateFormat}</div>
                <br />
                Last Scan Run
            </div>
        );
    }
}

export default connect(mapStateToProps)(RunDashboardData);