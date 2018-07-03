import React, { Component } from 'react';
import { connect } from "react-redux";
import { SITE_ACTIONS } from '../../redux/actions/siteActions';

const mapStateToProps = reduxState => ({
  reduxState

});
class SiteDashboardData extends Component {
  componentDidMount() {
    this.props.dispatch({ type: SITE_ACTIONS.FETCH_SITES})
  }

  render() {
    
    return (
      <div>
          Potential Spam Profiles :
          {/* {this.props.reduxState} */}
      </div>
    );
  }
}

export default connect(mapStateToProps)(SiteDashboardData);
