import  {
  RECEIVE_COLLECTION_ERRORS,
  CLEAR_COLLECTION_ERRORS,
} from '../actions/collections';


export default (state = [], action) => {
  switch(action.type) {
    case RECEIVE_COLLECTION_ERRORS:
      return action.errors.responseJSON;
    case CLEAR_COLLECTION_ERRORS:
      return [];
    default:
      return state;
  }
};
