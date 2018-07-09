import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import Nav from '../../components/Nav/Nav';

import ProfileData from './ProfileData'
import { USER_ACTIONS } from '../../redux/actions/userActions';
import ProfileLastThree from '../ProfilePage/ProfileLastThree';


const mapStateToProps = state => ({
  user: state.user,
});

class ProfileView extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: USER_ACTIONS.FETCH_USER
      // fetch profile action data
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
        <div>
          <p>Profile View</p>
        <ProfileData />
        <ProfileLastThree />
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


export default connect(mapStateToProps)(ProfileView);

