import React, { Component } from 'react';
import { connect } from 'react-redux';

import { USER_ACTIONS } from '../../redux/actions/userActions';

import { LOGIN_ACTIONS } from '../../redux/actions/loginActions';


const mapStateToProps = state => ({
    user: state.user,
});

class ApprovalHeader extends Component {
    componentDidMount() {
        this.props.dispatch({
            type: USER_ACTIONS.FETCH_USER
            // fetch profile action data
        });
    }

    handleClickForDeactivate = () => {
        console.log('Deactivate button click ');
        this.setState({
            deactivate: true,
        })
    }

    render() {
        let content = null;

        if (this.props.user.userName) {
            content = (
                <div className="GridHeader">
                    <p id="approve">Safe</p>
                    <img id="thumbsUp" src="icons/grey-thumb-up.png"></img>
                    <img id="thumbsDown" src="icons/grey-thumb-down.png"></img>
                    <p id="deny">Spam</p>
                </div>
            );
        }

        return (
            <div>
                {content}
            </div>
        );
    }
}


export default connect(mapStateToProps)(ApprovalHeader);