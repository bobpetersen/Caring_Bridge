import React, { Component } from 'react';
import { SCAN_ACTIONS } from '../../redux/actions/scanActions';

const mapStateToProps = reduxState => ({
    scanInfo:reduxState.scanInfo
});

class ScanDashboardData extends Component {
    componentDidMount() {
        this.props.dispatch({ type: SCAN_ACTIONS.FETCH_SCAN});
    }
    render() {
    
    return (
      <div>
          Sites Scanned : {this.props.scanInfo.length}
          <br />
          Last Scan Run : {this.props.scanInfo.lastScan}
      </div>
    );
  }
}

export default ScanDashboardData;
