import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CollectionButton from './collection_button';

const mapStateToProps = (state, ownProps) => ({
  game: ownProps.game,
});

export default connect(null, mapStateToProps)(CollectionButton);
