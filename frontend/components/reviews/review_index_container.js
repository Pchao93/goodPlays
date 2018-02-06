import { connect } from 'react-redux';
import { getReviews } from '../../actions/reviews';
import { withRouter } from 'react-router-dom';
import ReviewIndex from './review_index';


const mapStateToProps = (state, ownProps) => {
  let currentUser = state.entities.users[state.session.currentUser.id];
  let game = state.entities.games[ownProps.match.params.gameId];
  let reviews = Object.values(state.entities.reviews).filter(review => review.game_id === game.id);
  let review;
  if (currentUser) {
    currentUser.reviews.forEach(reviewIdx =>{
      if (state.entities.reviews[reviewIdx] && state.entities.reviews[reviewIdx].game_id === game.id) {
        review = state.entities.reviews[reviewIdx];
      }
    });
  }
  return ({
    game,
    currentUser,
    review,
    reviews,
  });
  // currentUser: state.session.currentUser,
};


const mapDispatchToProps = dispatch => ({
  getReviews: gameId => dispatch(getReviews(gameId)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewIndex));
