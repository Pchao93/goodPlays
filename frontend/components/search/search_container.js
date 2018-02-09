import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import React from 'react';
import {
  searchGames,
} from '../../actions/search';
import GameIndex from '../games/game_index.jsx';

const mapStateToProps = (state, ownProps) => {
  let currentUser = state.session.currentUser;
  let games = Object.values(state.search.games);
  let reviews = Object.values(state.search.reviews);
  if (state.session.currentUser) {
    currentUser = state.entities.users[currentUser.id];
  }
  let headerText;
  if (state.search.query) {
    headerText = `Search Results for "${state.search.query}"`;
  } else {
    headerText = '';
  }
  let collectionUser = {username: 'Top Games'};
  let collection = {name: ''};
  let search = true;

  return {
    headerText,
    games,
    query: state.search.query,
    collection,
    collectionUser,
    currentUser,
    reviews,
    search,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  // action: query => dispatch(searchGames(query)),
  search: query => dispatch(searchGames(query))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GameIndex));
