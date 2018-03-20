import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as actions from "../games";
import * as ApiUtil from "../../utils/games";

import { testGames, testGame } from "../../testUtils/game_helper";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);




describe("simple action creators", () => {
  test('receiveGames should create an action to receive games', () => {
    expect(actions.receiveGames(testGames)).toEqual({
      type: actions.RECEIVE_GAMES,
      games: testGames.games,
      reviews: testGames.reviews,
    });
  });

  test('receiveOneGame should create an action to receive game', () => {
    expect(actions.receiveOneGame(testGame)).toEqual({
      type: actions.RECEIVE_ONE_GAME,
      games: testGame.games,
      users: testGame.users,
      reviews: testGame.reviews
    });
  });
});

describe("async action creators", () => {
  test('getAllGames creates RECEIVE_GAMES after fetching games', () => {
    const store = mockStore({ games: {} });
    const expectedActions = [
      { type: actions.RECEIVE_GAMES, games: testGames.games, reviews: testGames.reviews}
    ];
    ApiUtil.getGames = jest.fn(() => {
      return Promise.resolve(testGames);
    });
    return store.dispatch(actions.getAllGames()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    })
  });
  test('fetchUserGames creates RECEIVE_GAMES after fetching games', () => {
    const store = mockStore({ games: {} });
    const expectedActions = [
      { type: actions.RECEIVE_GAMES, games: testGames.games, reviews: testGames.reviews}
    ];
    ApiUtil.getUserGames = jest.fn(() => {
      return Promise.resolve(testGames);
    });
    return store.dispatch(actions.fetchUserGames(51)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    })
  });
  test('getOneGame creates RECEIVE_ONE_GAME after fetching game', () => {
    const store = mockStore({ games: {} });
    const expectedActions = [
      { type: actions.RECEIVE_ONE_GAME, games: testGame.games, reviews: testGame.reviews, users: testGame.users}
    ];
    ApiUtil.getGame = jest.fn(() => {
      return Promise.resolve(testGame);
    });
    return store.dispatch(actions.getOneGame()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    })
  });
});
