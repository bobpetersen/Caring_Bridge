import React, { Component } from 'react';
import { connect } from "react-redux";
import { SCAN_ACTIONS } from '../../redux/actions/scanActions';
import Moment from 'react-moment';

const mapStateToProps = reduxState => ({
    scanReducer: reduxState.scanReducer
});
class ScanDashboardData extends Component {
    componentDidMount() {
        this.props.dispatch({ type: SCAN_ACTIONS.FETCH_SCAN });
    }
    render() {
        return (
            <div id="dashScanRun">
                <Moment className="DashboardData" format="lll">{this.props.scanReducer.scanInfo.lastScannedDate}</Moment>
                <br />
                Last Scan Run
            </div>
        );
    }
}

export default connect(mapStateToProps)(ScanDashboardData);