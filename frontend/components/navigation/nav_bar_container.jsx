import { connect } from 'react-redux';
import { logout } from '../../actions/session';
import { withRouter } from 'react-router-dom';
import NavBar from './nav_bar';


const mapStateToProps = state => ({
  currentUser: state.session
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
