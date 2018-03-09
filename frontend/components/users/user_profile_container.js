import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import React from 'react';
import {
  getAllCollections,
  getOneCollection,
  destroyCollection,
  updateCollection,
} from '../../actions/collections';
import {fetchUserGames} from '../../actions/games';
import {
  createFriendship,
  destroyFriendship,
} from '../../actions/friends';
import UserProfile from './user_profile';

const mapStateToProps = (state, ownProps) => {

  let currentUser = state.session.currentUser;
  let userId = ownProps.match.params.userId;
  let collections = Object.values(state.entities.collections).filter(collection => {

    return collection.user_id === parseInt(userId);
  });
  let reviews = Object.values(state.entities.reviews).filter(review => {
    return review.user_id === parseInt(userId);
  });
  let user = state.entities.users[userId];
  let games = state.entities.games;

  return {
    games,
    currentUser,
    collections,
    user,
    userId,
    reviews,
  };

};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchUserGames: (userId) => dispatch(fetchUserGames(userId)),
  getAllCollections: (userId) => dispatch(getAllCollections(userId)),
  createFriendship: (user1Id, user2Id) => dispatch(createFriendship(user1Id, user2Id)),
  destroyFriendship: (user1Id, user2Id) => dispatch(destroyFriendship(user1Id, user2Id)),

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserProfile));
