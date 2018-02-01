import { connect } from 'react-redux';
import {
  createCollection,
  getAllCollections,

} from '../../actions/collections';
import SideBar from './side_bar';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  collections: Object.values(state.entities.collections)
});

const mapDispatchToProps = dispatch => ({
  createCollection: (collection) => dispatch(createCollection(collection)),
  getAllCollections: () => dispatch(getAllCollections())
});

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
