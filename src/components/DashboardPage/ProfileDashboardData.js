import React, { Component } from 'react';
import { connect } from "react-redux";
import { PROFILE_ACTIONS } from '../../redux/actions/profileActions';

const mapStateToProps = reduxState => ({
    reduxState
});
class ProfileDashboardData extends Component {
    componentDidMount() {
        this.props.dispatch({ type: PROFILE_ACTIONS.FETCH_PROFILES })
    }
    render() {
    
    return (
      <div>
          Potential Spam Profiles : {this.props.reduxState.profile}
      </div>
    );
  }
}

export default connect(mapStateToProps)(ProfileDashboardData);




