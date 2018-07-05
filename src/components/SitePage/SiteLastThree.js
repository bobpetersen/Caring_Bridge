import React, { Component } from 'react';
import { connect } from 'react-redux';
import SiteTableBody from './SiteTableBody';


const mapStateToProps = state => ({
  site: state.site,
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
      type: 'FETCH_SITE'
    })
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
        <h2>Last Three Sites Processed</h2>
        <SiteTableBody />
      </div>
    );
  }
}

export default connect(mapStateToProps)(SiteData);