import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './Header';

import { USER_ACTIONS } from '../../redux/actions/userActions';

import { LOGIN_ACTIONS } from '../../redux/actions/loginActions';



const mapStateToProps = state => ({
  user: state.user,
  approval: state.approval,
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
      if (this.props.approval.approvalItem.type == 'site') {
        let contentUrl = `https://qa3.caringbridge.org/visit/${this.props.approval.approvalItem.item.name}`
        content = (
          <div className="Grid">
            <iframe id="spamSiteView" src={contentUrl}></iframe>
          </div>
        );
      }
      else if (this.props.approval.approvalItem.type == 'profile') {
        let contentUrl = `https://qa3.caringbridge.org/profile/${this.props.approval.approvalItem.item._id}`
        content = (
          <div className="Grid">
            <iframe id="spamSiteView" src={contentUrl}></iframe>
          </div>
        );
      }
    }

    return (
      <div>
        <Header history={this.props.history} />
        {content}
      </div>
    );
  }
}


export default connect(mapStateToProps)(ProfileView);