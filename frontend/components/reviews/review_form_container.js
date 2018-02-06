import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReviewForm from './review_form';
import { createReview, updateReview } from '../../actions/reviews';


const mapStateToProps = (state, ownProps) => ({
  game: ownProps.game,
  review: ownProps.review,

});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createReview: (review) => dispatch(createReview(ownProps.game.id, review)),
    updateReview: (review) => dispatch(updateReview(ownProps.game.id, review)),

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
