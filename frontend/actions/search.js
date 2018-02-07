import {
  getGames

} from '../utils/search';

export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';

export const receiveSearchResults = jsonObj => ({
  type: RECEIVE_SEARCH_RESULTS,
  reviews: jsonObj.reviews,
  query: jsonObj.query,
  games: jsonObj.games,
});

export const searchGames = query => dispatch => getGames(query)
    .then(games => dispatch(receiveSearchResults(games)),
    errors => console.error(errors));
