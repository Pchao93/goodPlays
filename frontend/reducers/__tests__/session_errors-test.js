import SessionErrorsReducer from "../session_errors";
import * as SessionActions from "../../actions/session";

describe("SessionErrorsReducer", () =>{
  test("should return the initial state", () =>{
    expect(SessionErrorsReducer(undefined, {})).toEqual([]);
  });

  test("should handle RECEIVE_SESSION_ERRORS", () => {
    expect(SessionErrorsReducer(undefined, {
      type: SessionActions.RECEIVE_SESSION_ERRORS,
      errors: { responseJSON: ["error"] }
    })).toEqual(
      ["error"]
    );
  });
  //
  test("should handle CLEAR_SESSION_ERRORS", () => {
    expect(SessionErrorsReducer(["error"], {
      type: SessionActions.CLEAR_SESSION_ERRORS,
    })).toEqual([]);
  });

  }
);
