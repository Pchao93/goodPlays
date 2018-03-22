import GamesReducer from "../games";
import * as GameActions from "../../actions/games";
import { testGames, testGame } from "../../testUtils/game_helper";


describe("GamesReducer", () =>{
  test("should return the initial state", () =>{
    expect(GamesReducer(undefined, {})).toEqual({});
  });

  test("should handle RECEIVE_GAMES", () => {
    expect(GamesReducer(undefined, {
      type: GameActions.RECEIVE_GAMES,
      games: testGames
    })).toEqual(
      testGames
    );
  });
  //
  test("should handle RECEIVE_ONE_GAME", () => {
    expect(GamesReducer(undefined, {
      type: GameActions.RECEIVE_ONE_GAME,
      games: testGame.games,
      users: testGame.users,
      reviews: testGame.reviews
    })).toEqual(testGame.games);
  });

  }
);
