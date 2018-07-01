import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../../components/Nav/Nav';
import { USER_ACTIONS } from '../../redux/actions/userActions';

const mapStateToProps = state => ({
  user: state.user,
});

class DevelopmentProfile extends Component {
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
        <div>
          <h2> Production Profile Form </h2>
            {/* input form here */}
          <form>
            <input type="text" name="siteUrl" placeholder="Site URL"/>
            <input type="text" name="siteCreated" placeholder="Site Created"/>
            <input type="text" name="user" placeholder="User"/>
            <input type="text" name="userEmail" placeholder="User Email"/>
            <input type="text" name="userCreated" placeholder="User Created"/>
            <input type="text" name="siteIP" placeholder="Site IP"/>
            <input type="text" name="bioUrl" placeholder="Bio URL"/>
            <input type="text" name="altSiteUrl" placeholder="Alt Site URL"/>
            <input type="submit" value="Submit" />
          </form>
        </div>
      );
    }

    return (
      <div>
        <Nav />
        { content }
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(DevelopmentProfile);
