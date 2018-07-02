import React, { Component } from 'react';
import { SCAN_ACTIONS } from '../../redux/actions/scanActions';

const mapStateToProps = reduxState => ({
    scanInfo:reduxState.scanInfo
});

class ScanDashboardData extends Component {
    render() {
    
    return (
      <div>
          Sites Scanned : {this.props.scanInfo.length}
          <br />
          {/* need to import variable name for lastscan  */}
          Last Scan Run : {this.props.scanInfo.lastScan}
      </div>
    );
  }
}

export default ScanDashboardData;
