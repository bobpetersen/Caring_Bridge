import React, { Component } from 'react';
import { connect } from "react-redux";
import { SITE_ACTIONS } from '../../redux/actions/siteActions';

const mapStateToProps = reduxState => ({
  siteReducer: reduxState.siteReducer

});
class SiteDashboardData extends Component {
  componentDidMount() {
    this.props.dispatch({ type: SITE_ACTIONS.FETCH_SITE})
  }

  render() {
    
    return (
      <div id="dashSite">
         <h2 className="DashboardData">{this.props.siteReducer.allSites.length}</h2>
         Potential Spam Sites
      </div>
    );
  }
}

export default connect(mapStateToProps)(SiteDashboardData);
