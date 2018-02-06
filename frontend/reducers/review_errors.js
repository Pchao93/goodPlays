import  {
  RECEIVE_REVIEW_ERRORS,
  CLEAR_REVIEW_ERRORS,
} from '../actions/reviews';


export default (state = [], action) => {
  switch(action.type) {
    case RECEIVE_REVIEW_ERRORS:
      return action.errors.responseText;
    case CLEAR_REVIEW_ERRORS:
      return [];
    default:
      return state;
  }
};
