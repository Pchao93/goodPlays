import React from 'react';
import CollectionIndex from './collection_index';
class UserProfile extends React.Component {
  constructor(props) {
    super(props);

    console.log("props", props);





  }

  componentDidMount() {
    console.log("mounted");
    this.props.getAllCollections(this.props.userId).then(
      () => this.props.fetchUserGames(this.props.userId)
    );
  }

  render() {



    return (
      <div className="user-profile-container">

        <div className="user-profile-information">

        </div>

        <div className="collection-index-container">

          <CollectionIndex
            collections={this.props.collections}
            games={this.props.games}/>

        </div>


      </div>
    );
  }
}

export default UserProfile;
