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

  let review;
  if (currentUser && game) {
    game.reviews.forEach(reviewIdx =>{
      if (state.entities.reviews[reviewIdx] && game && state.entities.reviews[reviewIdx].user_id === currentUser.id) {

        console.log("hit!");
        review = state.entities.reviews[reviewIdx];
      }
    });
  }
  if (game && review) {
    reviews = Object.values(state.entities.reviews).filter(review2 => review2.game_id === game.id);
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
