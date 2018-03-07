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
import UserProfile from './user_profile';

const mapStateToProps = (state, ownProps) => {
  let collections = Object.values(state.entities.collections);
  let currentUser = state.session.currentUser;
  let userId = ownProps.match.params.userId;
  console.log(userId);
  let user = state.entities.users[userId];
  let games = state.entities.games;
  console.log("state",state);
  return {
    games,
    currentUser,
    collections,
    user,
    userId,
  };

};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchUserGames: (userId) => dispatch(fetchUserGames(userId)),
  getAllCollections: (userId) => dispatch(getAllCollections(userId)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserProfile));
