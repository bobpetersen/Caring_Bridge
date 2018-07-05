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
      <div id="dashScanned">
        <h2 className="DashboardData">{JSON.stringify(this.props.scanReducer.scanInfo.sitesScanned)}</h2>
        Sites Scanned
      </div>
    );
  }
}

export default connect(mapStateToProps)(ScanDashboardData);
