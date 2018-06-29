import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../../components/Nav/Nav';
import { USER_ACTIONS } from '../../redux/actions/userActions';

const mapStateToProps = state => ({
  user: state.user,
});

class DevelopmentSite extends Component {
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
          <h2>
            Production Profile Site
            {/* input form here */}
          </h2>
                    <form>
            <input type="text" name="siteUrl" placeholder="Site URL"/>
            <input type="text" name="siteCreated" placeholder="Site Created"/>
            <input type="text" name="user" placeholder="User"/>
            <input type="text" name="userEmail" placeholder="User Email"/>
            <input type="text" name="userCreated" placeholder="Site Created Date"/>
            <input type="text" name="siteIP" placeholder="Site IP"/>
            <input type="text" name="description" placeholder="Description"/>
            <input type="text" name="body" placeholder="Body"/>
            <input type="text" name="userId" placeholder="User ID"/>
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
export default connect(mapStateToProps)(DevelopmentSite);
