import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

class SiteButtons extends Component {

  static propTypes = {
    history: PropTypes.object.isRequired,
  }

  // this component needs the site info passed to it as a prop
  handleClick = () => {
    this.props.dispatch({
      type: 'APPROVAL_ITEM',
      payload: {
        type: 'site',
        item: this.props.site,
      }
    });
    this.props.history.push('/approval');
  }

  render() {
    const { history } = this.props;

    return (
      <div>
        <Button onClick={this.handleClick}>{this.props.buttonLabel}</Button>
      </div>
    );
  }
}


export default withRouter(connect()(SiteButtons));
