import React, { Component } from 'react';
import { PROFILE_ACTIONS } from '../../redux/actions/profileActions';

const mapStateToProps = reduxState => ({
    allProfiles: reduxState.allProfiles
});
class ProfileDashboardData extends Component {
    componentDidMount() {
        this.props.dispatch({ type: PROFILE_ACTIONS.FETCH_PROFILES })
    }
    render() {
    
    return (
      <div>
          Potential Spam Profiles : {this.props.allProfiles}
      </div>
    );
  }
}

export default connect(mapStateToProps)(ProfileDashboardData);
