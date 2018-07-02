import React, { Component } from 'react';
import { PROFILE_ACTIONS } from '../../redux/actions/profileActions';

const mapStateToProps = reduxState => ({
    profile: reduxState.profile
});
class ProfileDashboardData extends Component {
    render() {
    
    return (
      <div>
          Potential Spam Profiles : {this.props.profile.length}
      </div>
    );
  }
}

export default ProfileDashboardData;
