import React, { Component } from 'react';
import { connect } from "react-redux";
import { PROFILE_ACTIONS } from '../../redux/actions/profileActions';

const mapStateToProps = reduxState => ({
    profileReducer: reduxState.profileReducer
});
class ProfileDashboardData extends Component {
    componentDidMount() {
        this.props.dispatch({ type: PROFILE_ACTIONS.FETCH_PROFILES })
    }
    render() {

        return (
            <div id="dashProfile">
                <h2 className="DashboardData">{this.props.profileReducer.allProfiles.length}</h2>
                Potential Spam Profiles
      </div>
        );
    }
}

export default connect(mapStateToProps)(ProfileDashboardData);




