import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReviewButton from './review_button';

const mapStateToProps = (state, ownProps) => ({
  game: ownProps.game,
});

export default connect(mapStateToProps, null)(ReviewButton);
