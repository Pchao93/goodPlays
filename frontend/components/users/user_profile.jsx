import React from 'react';
import CollectionIndex from './collection_index';
import UserProfileReviews from './user_profile_reviews';
import { CircleLoader } from 'react-spinners';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.handleFollow = this.handleFollow.bind(this);
    this.handleUnfollow = this.handleUnfollow.bind(this);

    this.state = {
      loading: true,
    };
  }

  componentDidMount() {

    this.props.getAllCollections(this.props.userId).then(
      () => this.props.fetchUserGames(this.props.userId).then(() => (
        this.setState({loading: false})
      )

      )
    );
  }

  componentWillReceiveProps(newProps) {
    if (this.props.userId !== newProps.userId) {
      this.setState({loading: true});
      newProps.getAllCollections(newProps.userId).then(
        () => newProps.fetchUserGames(newProps.userId)
      ).then(() => (
        this.setState({loading: false})
      )

      );
    }
  }

  handleFollow(e) {
    e.preventDefault();

    this.props.createFriendship(this.props.currentUser.id, this.props.userId);
  }

  handleUnfollow(e) {
    e.preventDefault();

    this.props.destroyFriendship(this.props.currentUser.id, this.props.userId);
  }

  render() {
    if (this.state.loading) {
      return (<div className='index-spinner'>
        <CircleLoader
          color={'#4b367c'}
          loading={this.state.loading}
        />
    </div>);
    }
    return (
      <div className="user-profile-container">

        <div className="user-profile-information">

          {this.props.user &&
            <div className="profile-info-left">
              <img
                className="profile-image"
                src={this.props.user.image_url}>
              </img>
              {this.props.currentUser &&
                this.props.currentUser.id != this.props.userId &&
                  this.props.currentUser.friends &&
                    !this.props.currentUser.friends[this.props.userId] &&
                      <button
                        onClick={this.handleFollow}
                        className=" add-friend btn">
                        Follow
                      </button>}
              {this.props.currentUser &&
                this.props.currentUser.id != this.props.userId &&
                  this.props.currentUser.friends &&
                    this.props.currentUser.friends[this.props.userId] &&
                      <button
                        onClick={this.handleUnfollow}
                        className=" add-friend btn">
                        Unfollow
                      </button>}
            </div>}
            {this.props.user && <div className="profile-details">
              <div className="user-profile-header">
                {this.props.user && `${this.props.user.username[0].toUpperCase() + this.props.user.username.slice(1)}`}
              </div>
              <div className="profile-summary">
                {this.props.user.summary}
              </div>
              <div className="profile-description">
                {this.props.user.description}
              </div>
            </div>}
        </div>

        <div className="collection-index-container">
          <div className="collection-index-header">
            Collections
          </div>
          <CollectionIndex
            collections={this.props.collections}
            games={this.props.games}/>

        </div>


          <UserProfileReviews
            user={this.props.user}
            reviews={this.props.reviews}
            games={this.props.games}/>


      </div>
    );
  }
}

export default UserProfile;
