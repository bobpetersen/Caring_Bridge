import React, { Component } from 'react';
import { connect } from 'react-redux';

import { LOGIN_ACTIONS } from '../../redux/actions/loginActions';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';


const mapStateToProps = state => ({
  user: state.user,
});

class Header extends Component {

  logout = () => {
    this.props.dispatch({
      type: LOGIN_ACTIONS.LOGOUT
    });
  }

  render() {
    return (
      <div className="GridHeader">
        <h1 className="Title">Sift</h1>
        <Link to="/home">
        <Button onClick={this.logout}>Sign Out </Button>
        </Link>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Header);