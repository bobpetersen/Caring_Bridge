import React, { Component } from 'react';
import { SITE_ACTIONS } from '../../redux/actions/siteActions';

const mapStateToProps = reduxState => ({
  allSites: reduxState.allSites

});
class SiteDashboardData extends Component {
  render() {
    
    return (
      <div>
          Potential Spam Profiles :
          {this.props.allSites.length}
      </div>
    );
  }
}

export default SiteDashboardData;
