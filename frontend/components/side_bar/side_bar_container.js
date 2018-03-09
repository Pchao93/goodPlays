import { connect } from 'react-redux';
import {
  createCollection,
  getAllCollections,

} from '../../actions/collections';
import SideBar from './side_bar';

const mapStateToProps = (state, ownProps) => {
  let currentUser = state.session.currentUser;
  let collections = [];
  let friends;
  if (currentUser) {
    friends = currentUser.friends;

    collections = Object.values(state.entities.collections)
      .filter(collection => collection.user_id === currentUser.id);
  }
  return {
    currentUser,
    collections,
    friends,
  };
};

const mapDispatchToProps = dispatch => ({
  createCollection: (collection) => dispatch(createCollection(collection)),
  getAllCollections: (userId) => dispatch(getAllCollections(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
