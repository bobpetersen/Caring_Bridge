import React, { Component } from 'react';
import { SITE_ACTIONS } from '../../redux/actions/siteActions';

const mapStateToProps = reduxState => ({
  siteReducer: reduxState.siteReducer

});
class SiteDashboardData extends Component {
  componentDidMount() {
    this.props.dispatch({ type: SITE_ACTIONS.FETCH_SITES})
  }

  render() {
    
    return (
      <div>
          Potential Spam Profiles :
          {this.props.siteReducer.length}
      </div>
    );
  }
}

export default connect(mapStateToProps)(SiteDashboardData);
