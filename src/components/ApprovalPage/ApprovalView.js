import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './Header';

import { USER_ACTIONS } from '../../redux/actions/userActions';

import { LOGIN_ACTIONS } from '../../redux/actions/loginActions';



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

 
  render() {
    let content = null;

    if (this.props.user.userName) {
      content = (
        <div className="Grid">
            <iframe id="spamSiteView" src="https://www.caringbridge.org/"></iframe>
        </div>
      );
    }

    return (
      <div>
        <Header />
        { content }
      </div>
    );
  }
}


export default connect(mapStateToProps)(ProfileView);