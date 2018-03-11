import React from 'react';
import SideBarCollectionsContainer from './side_bar_collections_container';
import SideBarFollowingContainer from './side_bar_following_container';

class SideBar extends React.Component {

  constructor(props) {
    super(props);



  }

  render () {
    if (!this.props.currentUser) {
      return "";
    }
    return (
      <div className='side-bar'>
        <SideBarCollectionsContainer/>
        <SideBarFollowingContainer/>
      </div>
    );
  }
}

export default SideBar;
