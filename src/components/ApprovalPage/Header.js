import React, { Component } from 'react';
import { connect } from 'react-redux';

import { USER_ACTIONS } from '../../redux/actions/userActions';

import { LOGIN_ACTIONS } from '../../redux/actions/loginActions';


const mapStateToProps = state => ({
    user: state.user,
});

class ApprovalHeader extends Component {
    constructor() {
        super();
        this.state = {
            wasClicked: false,
        };
    }

    componentDidMount() {
        this.props.dispatch({
            type: USER_ACTIONS.FETCH_USER
            // fetch profile action data
        });
    }

    pictureClicked() {
        this.setState({
            wasClicked: !this.state.wasClicked
        });
    }

    render() {
        let content = null;

        if (this.props.user.userName) {
            content = (
                <form className="GridHeader">
                    <p id="approve">Safe</p>
                    <img id="thumbsUp" src="icons/grey-thumb-up.png"></img>
                    <div className="ContainerDown">
                        <input id="thumbsDown" type="image" src="icons/grey-thumb-down.png" alt="Submit" />
                        <div className="Overlay">
                            <input id="thumbsDown" type="image" src="icons/purple-thumb-down.png" alt="Submit" />
                        </div>
                    </div>
                    <p id="deny">Spam</p>
                </form>
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