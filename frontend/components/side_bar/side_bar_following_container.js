import { connect } from 'react-redux';
import {
  createCollection,
  getAllCollections,

} from '../../actions/collections';
import SideBarFollowing from './side_bar_following';

const mapStateToProps = (state, ownProps) => {
  let currentUser = state.session.currentUser;
  let friends;
  if (currentUser) {
    friends = currentUser.friends;
  }
  return {
    currentUser,
    friends,
  };
};

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(SideBarFollowing);
