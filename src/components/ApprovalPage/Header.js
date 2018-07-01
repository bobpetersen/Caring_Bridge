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

    handleNotSpam = (event) => {
        event.preventDefault();
        this.props.history.push('/site');
    }

    handleSpam = (event) => {
        event.preventDefault();
        this.props.history.push('/site');
    }

    render() {
        let content = null;

        if (this.props.user.userName) {
            content = (
                <form className="GridHeader">
                    <p id="approve">Safe</p>
                    <div className="ContainerUp">
                        <input type="image" src="icons/grey-thumb-up.png" alt="Submit" />
                        <div className="Overlay">
                            <input type="image" src="icons/purple-thumb-up.png" alt="Submit" onClick={this.handleNotSpam}/>
                        </div>
                    </div>
                    <div className="ContainerDown">
                        <input type="image" src="icons/grey-thumb-down.png" alt="Submit" />
                        <div className="Overlay">
                            <input type="image" src="icons/purple-thumb-down.png" alt="Submit" onClick={this.handleSpam}/>
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