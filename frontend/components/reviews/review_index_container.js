import { connect } from 'react-redux';
import { getReviews, destroyReview } from '../../actions/reviews';
import { withRouter } from 'react-router-dom';
import ReviewIndex from './review_index';


const mapStateToProps = (state, ownProps) => {
  let currentUser;
  
  if (state.session.currentUser) {
    currentUser = state.entities.users[state.session.currentUser.id];

  }
  let game = state.entities.games[ownProps.match.params.gameId];
  let reviews = state.entities.reviews;
  let users = state.entities.users;
  // if (currentUser) {
  //   currentUser.reviews.forEach(reviewIdx =>{
  //     if (state.entities.reviews[reviewIdx] && state.entities.reviews[reviewIdx].game_id === game.id) {
  //       review = state.entities.reviews[reviewIdx];
  //     }
  //   });
  // }
  return ({
    game,
    currentUser,
    // review,
    reviews,
    users,
  });
  // currentUser: state.session.currentUser,
};


const mapDispatchToProps = dispatch => ({
  getReviews: gameId => dispatch(getReviews(gameId)),
  destroyReview: reviewId => dispatch(destroyReview(reviewId))

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewIndex));
