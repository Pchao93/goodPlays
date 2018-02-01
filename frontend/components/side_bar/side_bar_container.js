import { connect } from 'react-redux';
import {
  createCollection,
  getAllCollections,

} from '../../actions/collections';
import SideBar from './side_bar';

const mapStateToProps = (state, ownProps) => {

  let currentUser = state.session.currentUser;
  let collections = [];
  if (currentUser) {
    collections = Object.values(state.entities.collections)
      .filter(collection => collection.user_id === currentUser.id);
  }
  return {
    currentUser,
    collections
  };
};

const mapDispatchToProps = dispatch => ({
  createCollection: (collection) => dispatch(createCollection(collection)),
  getAllCollections: () => dispatch(getAllCollections())
});

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
