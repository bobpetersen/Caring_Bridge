import React, { Component } from 'react';

import SiteTableBody from './SiteTableBody';

class SiteData extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <h2>Filter Results</h2>
        <SiteTableBody />
      </div>
    );
  }
}

export default SiteData;