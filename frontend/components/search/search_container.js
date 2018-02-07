import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import React from 'react';
import {
  searchGames,
} from '../../actions/search';
import GameIndex from '../games/game_index.jsx';

const mapStateToProps = (state, ownProps) => {
  let currentUser = state.session.currentUser;
  let games = state.search.games;
  let reviews = state.search.reviews;
  if (state.session.currentUser) {
    currentUser = state.entities.users[currentUser.id];
  }
  let collectionUser = {username: 'Top Games'};
  let collection = {name: ''};
  return {
    headerText: `Search Results for ${state.search.query}`,
    games,
    query: state.search.query,
    collection,
    collectionUser,
    currentUser,
    reviews
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  searchGames: query => dispatch(searchGames(query)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GameIndex));
