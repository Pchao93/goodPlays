import { connect } from 'react-redux';
import { getOneGame } from '../../actions/games';
import { withRouter } from 'react-router-dom';
import GameShow from './game_show';


const mapStateToProps = (state, ownProps) => {
  let currentUser;
  if (state.session.currentUser) {
    currentUser = state.entities.users[state.session.currentUser.id];
  }
  let game = state.entities.games[ownProps.match.params.gameId];
  let reviews;
  if (game && review) {
    reviews = Object.values(state.entities.reviews).filter(review => review.game_id === game.id);
  }
  let review;
  if (currentUser && game) {
    game.reviews.forEach(reviewIdx =>{
      if (state.entities.reviews[reviewIdx] && game && state.entities.reviews[reviewIdx].user_id === currentUser.id) {


        review = state.entities.reviews[game.review];
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
  getOneGame: gameId => dispatch(getOneGame(gameId)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GameShow));
