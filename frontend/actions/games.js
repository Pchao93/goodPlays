import { getGame, getGames, getUserGames } from '../utils/games';

export const RECEIVE_ONE_GAME = "RECEIVE_ONE_GAME";
export const RECEIVE_GAMES = "RECEIVE_GAMES";

const receiveOneGame = jsonObj => ({
  type: RECEIVE_ONE_GAME,
  games: jsonObj.games,
  reviews: jsonObj.reviews,
  users: jsonObj.users
});

const receiveGames = jsonObj => ({
  type: RECEIVE_GAMES,
  games: jsonObj.games,
  reviews: jsonObj.reviews
});

export const getOneGame = gameId => dispatch => getGame(gameId)
    .then(game => dispatch(receiveOneGame(game)));

export const getAllGames = () => dispatch => getGames()
    .then(games => dispatch(receiveGames(games)));

export const fetchUserGames = () => dispatch => getUserGames()
  .then(games => dispatch(receiveGames(games)));
