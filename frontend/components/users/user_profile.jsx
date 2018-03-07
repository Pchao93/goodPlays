import React from 'react';
import CollectionIndex from './collection_index';
class UserProfile extends React.Component {
  constructor(props) {
    super(props);







  }

  componentDidMount() {

    this.props.getAllCollections(this.props.userId).then(
      () => this.props.fetchUserGames(this.props.userId)
    );
  }

  render() {



    return (
      <div className="user-profile-container">

        <div className="user-profile-header">
          {this.props.user && `${this.props.user.username[0].toUpperCase() + this.props.user.username.slice(1)} > Profile`}
        </div>

        <div className="user-profile-information">
        </div>

        <div className="collection-index-container">
          <div className="collection-index-header">
            Collections
          </div>
          <CollectionIndex
            collections={this.props.collections}
            games={this.props.games}/>

        </div>


      </div>
    );
  }
}

export default UserProfile;
