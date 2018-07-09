import React, { Component } from 'react';
import ProfileTableBody from './ProfileTableBody';

class ProfileData extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    
    return (
      <div>
        <h2>Filter Results</h2>
        <ProfileTableBody />
      </div>
    );
  }
}

export default ProfileData;