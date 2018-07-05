import React, { Component } from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import SiteTableBody from './SiteTableBody';
import { SITE_ACTIONS } from '../../redux/actions/siteActions';


const mapStateToProps = reduxState => ({
  siteReducer: reduxState.siteReducer
});

class SiteData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deactivate: false,
    }
  }

  componentDidMount() {
    this.props.dispatch({
      type: SITE_ACTIONS.FETCH_SITE
    });
    this.props.dispatch({
      type: 'ALL_SITES'
    });
  }

  handleClickForDeactivate = () => {
    console.log('Deactivate button click ');
    this.setState({
      deactivate: true,
    })
  }

  render() {

    return (
      <div>
        <h2>Filter Results</h2>
        <SiteTableBody />




  

      <div>
          <h2>SiteData</h2>
                  {/* {JSON.stringify(this.props.siteReducer)} */}
        <table>
          <tbody>
            <tr>
              <th>Site Id</th>
              <th>First Name</th>
              <th>Created At</th>
              <th>User Id</th>
              <th>Reasons</th>
            </tr>
            {this.props.siteReducer.allSites.map((site, i) => {
                return (
                 <tr key={i}>
                  <td>{site._id}</td>
                  <td>{site.name}</td>
                  <td><Moment format="LL">{site.createdAt}</Moment></td>
                  <td>{site.status.userId.toString()}</td>
                  <td>{site.audit_data.reason.toString()}</td>
                  </tr>
                );
            })}
          </tbody>
        </table>
        <h2>Last Three Sites Processed</h2>
        <table>
          <tbody>
            <tr>
              <th>Site ID</th>
              <th>First Name</th>
              <th>Created At</th>
              <th>User ID</th>
              <th>Reasons</th>
            </tr>
              <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              </tr>
          </tbody>
        </table>
      </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(SiteData);