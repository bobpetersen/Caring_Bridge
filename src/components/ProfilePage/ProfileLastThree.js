import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProfileButtons from '../ProfilePage/ProfileButtons';
import Moment from 'react-moment';
import {
  Table, TableBody, TableCell,
  TableHead, TableRow, Paper
} from '@material-ui/core';



const mapStateToProps = reduxState => ({
  profileReducer: reduxState.profileReducer
});

class ProfileLastThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deactivate: false,
    } 
  }

  componentDidMount() {
    this.props.dispatch({
      type: 'FETCH_PROFILES'
    })
  }

  handleClickForDeactivate = () => {
    console.log('Deactivate button click ');
      this.setState({ 
        deactivate: true,
    }) 
  }

  render() {
    const profileData = this.props.profileReducer.recentThreeProfiles
    return (
      <div>
        <h2>Recently Processed</h2>
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Reviewed Site</TableCell>
                <TableCell>Flagged</TableCell>
                <TableCell>Profile ID</TableCell>
                <TableCell>User Email</TableCell>
                <TableCell>IP Address</TableCell>
                <TableCell>User Created</TableCell>
                <TableCell>Reasons Flagged</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              { profileData.map((data, i) => {
                  return (
                    <TableRow key={i}>
                      <TableCell scope="row" padding="none">
                        <ProfileButtons profile={data} buttonLabel="Review"/>
                      </TableCell>
                      <TableCell>{data.marked.toString()}</TableCell>
                      <TableCell numeric>{data._id.toString()}</TableCell>
                      <TableCell>{data.email.address}</TableCell>
                      <TableCell>{data.ip}</TableCell>
                      <TableCell numeric><Moment format="LL">{data.createdAt}</Moment></TableCell>
                      <TableCell >{data.audit_data.reason.toString()}</TableCell>
                    </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

export default connect(mapStateToProps)(ProfileLastThree);