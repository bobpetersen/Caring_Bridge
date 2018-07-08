import React, { Component } from 'react';
import { connect } from 'react-redux';

import { USER_ACTIONS } from '../../redux/actions/userActions';

import { LOGIN_ACTIONS } from '../../redux/actions/loginActions';


const mapStateToProps = state => ({
    user: state.user,
    approval: state.approval,
});

class ApprovalHeader extends Component {
    componentDidMount() {
        this.props.dispatch({
            type: USER_ACTIONS.FETCH_USER
            // fetch profile action data
        });
    }

    handleThumb = (type) => (event) => {
        event.preventDefault();
        let action = {};
        if (this.props.approval.approvalItem.type === 'site') {
            action.type = 'SET_SITE_STATUS';
        }
        else if (this.props.approval.approvalItem.type === 'profile') {
            action.type = 'SET_PROFILE_STATUS';
        }
        action.payload = {};
        action.payload.status = type;
        action.payload[this.props.approval.approvalItem.type] = this.props.approval.approvalItem.item;
        this.props.dispatch(action);
        
        console.log(this.props.history);
        this.props.history.goBack();
    }

    handleExit = (event) => {
        event.preventDefault();
        this.props.history.goBack();
    }

    render() {
        let content = null;

        if (this.props.user.userName) {
            content = (
                <form className="GridHeader">
                    <h4 id="approve">Safe</h4>
                    <p id="approved">(Remove Flag)</p>
                    <div className="ContainerUp">
                        <input type="image" src="icons/grey-thumb-up.png" alt="Submit" />
                        <div className="Overlay">
                            <input type="image" src="icons/green-thumb-up.png" alt="Submit" onClick={this.handleThumb('safe')}/>
                        </div>
                    </div>
                    <div className="ContainerDown">
                        <input type="image" src="icons/grey-thumb-down.png" alt="Submit" />
                        <div className="Overlay">
                            <input type="image" src="icons/red-thumb-down.png" alt="Submit" onClick={this.handleThumb('spam')}/>
                        </div>
                    </div>
                    <p id="deny">Spam</p>
                    <p id="denied">(Deactivate)</p>
                    <p id="exit">Go Back</p>
                    <input id="exiting" type="image" src="icons/window-close.png" alt="Submit" onClick={this.handleExit}/>
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