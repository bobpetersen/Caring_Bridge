import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../../components/Nav/Nav';
import SiteDashboardData from './SiteDashboardData';
import ProfileDashboardData from './ProfileDashboardData';
import ScanDashboardData from './ScanDashboardData';

import { USER_ACTIONS } from '../../redux/actions/userActions';

import Header from '../Header/Header';
import RunDashboardData from './RunDashboardData';


const mapStateToProps = state => ({
  user: state.user,
});

class Dashboard extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: USER_ACTIONS.FETCH_USER
    });
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
    }
  }

  render() {
    let content = null;

    if (this.props.user.userName) {
      content = (
        <div className="GridDashboard">
           <SiteDashboardData />
           <ProfileDashboardData />
           <ScanDashboardData />
           <RunDashboardData />
        </div>
      );
    }

    return (
      <div>
        <Header />
        <Nav />
        { content }
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(Dashboard);

