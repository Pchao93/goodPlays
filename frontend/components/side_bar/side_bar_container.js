import { connect } from 'react-redux';
import SideBar from './side_bar';

const mapStateToProps = (state, ownProps) => {
  let currentUser = state.session.currentUser;
  return {
    currentUser,


  };
};

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
