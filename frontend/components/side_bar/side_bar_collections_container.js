import { connect } from 'react-redux';
import {
  createCollection,
  getAllCollections,

} from '../../actions/collections';
import SideBarCollections from './side_bar_collections';

const mapStateToProps = (state, ownProps) => {
  let currentUser = state.session.currentUser;
  let collections = [];
  let friends;
  if (currentUser) {

    collections = Object.values(state.entities.collections)
      .filter(collection => collection.user_id === currentUser.id);
  }
  return {
    currentUser,
    collections,
  };
};

const mapDispatchToProps = dispatch => ({
  createCollection: (collection) => dispatch(createCollection(collection)),
  getAllCollections: (userId) => dispatch(getAllCollections(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(SideBarCollections);
