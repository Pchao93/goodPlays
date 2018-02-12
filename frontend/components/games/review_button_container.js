import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createReview, updateReview } from '../../actions/reviews';
import { openSessionForm, receiveSessionErrors } from '../../actions/session';

import ReviewButton from './review_button';

const mapStateToProps = (state, ownProps) => {
  let currentUser;
  if (state.session.currentUser) {
    currentUser = state.entities.users[state.session.currentUser.id];
  }
  return {
    game: ownProps.game,
    currentUser,
    rating: ownProps.rating
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createReview: (review) => dispatch(createReview(ownProps.game.id, review)),
    updateReview: (review) => dispatch(updateReview(ownProps.game.id, review)),
    openSessionForm: () => dispatch(openSessionForm()),
    receiveSessionErrors: (errors) => dispatch(receiveSessionErrors(errors)),
    openForm: ownProps.openForm,
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewButton));
