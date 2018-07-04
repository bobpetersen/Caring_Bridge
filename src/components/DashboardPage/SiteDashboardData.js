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
      <div>
          Potential Spam Site : {this.props.siteReducer.allSites.length}
      </div>
    );
  }
}

export default connect(mapStateToProps)(SiteDashboardData);
