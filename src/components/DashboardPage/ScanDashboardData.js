import React, { Component } from 'react';
import { connect } from "react-redux";
import { SCAN_ACTIONS } from '../../redux/actions/scanActions';

const mapStateToProps = reduxState => ({
    reduxState
});
class ScanDashboardData extends Component {
    componentDidMount() {
        this.props.dispatch({ type: SCAN_ACTIONS.FETCH_SCAN});
    }
    render() {
    
    return (
      <div>
          {/* site router not yet defined, set default object property as, 'siteScan' until it's declared  */}
          {/* Sites Scanned : {this.props.reduxState.siteScan} */}
          <br />
          {/* site router not yet defined, set default object property as 'lastScan' until it's declared  */}
          {/* Last Scan Run : {this.props.reduxState.lastScan} */}
      </div>
    );
  }
}

export default connect(mapStateToProps)(ScanDashboardData);
