import React from 'react';
import {Link} from 'react-router-dom';
import { BeatLoader } from 'react-spinners';

class SideBarFollowing extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    let { friends } = this.props;
    let friendsArr = [];
    if (friends) {
      friendsArr = Object.values(this.props.friends).map(friend => (
        <li key={friend.id}>
          <Link
            className="friend-name"
            to={`/users/${friend.id}`}>
            <img
              className="friend-profile-image"
              src={friend.image_url}>
            </img>
            {friend.username}
          </Link>
        </li>
      ));
    }


    return (

        <div className='side-bar-friends'>
          <div className='side-bar-header'>Following</div>
          <ul className='friends-list'>
            {friendsArr}
          </ul>
        </div>
    );
  }
}

export default SideBarFollowing;
