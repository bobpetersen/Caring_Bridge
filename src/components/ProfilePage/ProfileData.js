import React, { Component } from 'react';

class ProfileData extends Component {

  render() {
    
    return (
      <div>
          <h2>Profile Data</h2>
        <table>
          <tbody>
            <tr>
              <th>User</th>
              <th>User ID</th>
              <th>User Email</th>
              <th>User Created</th>
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
        <h2>Last Three Profiles Processed</h2>
        <table>
          <tbody>
            <tr>
              <th>User</th>
              <th>User ID</th>
              <th>User Email</th>
              <th>User Created</th>
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
    );
  }
}

export default ProfileData;