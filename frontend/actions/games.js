import { getGame, getGames } from '../utils/games';

export const RECEIVE_ONE_GAME = "RECEIVE_ONE_GAME";
export const RECEIVE_GAMES = "RECEIVE_GAMES";

const receiveOneGame = game => ({
  type: RECEIVE_ONE_GAME,
  game
});

const receiveGames = games => ({
  type: RECEIVE_GAMES,
  games
});

export const getOneGame = gameId => dispatch => getGame(gameId)
    .then(game => dispatch(receiveOneGame(game)));

export const getAllGames = () => dispatch => getGames()
    .then(games => dispatch(receiveGames(games)));
