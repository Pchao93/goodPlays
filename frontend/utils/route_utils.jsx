import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
  redirectPath: ownProps.location.pathname
});

const Auth = ({ loggedIn, path, component: Component}) => (
  <Route
    path={path}
    render={(props) => (
      loggedIn ? <Redirect to="/directory"/> : <Component {...props} />
    )}
  />
);

const Protected = ({ redirectPath, loggedIn, path, component: Component}) => (
  <Route
    path={path}
    render={(props) => (
      loggedIn ? <Component {...props} /> : <Redirect to={`/`} />
    )}
  />
);

const Bool = ({ bool, path, component: Component, redirectPath}) => (
  <Route
    path={path}
    render={(props) => (
      bool ? <Component {...props} /> : <Redirect to={redirectPath} />
    )}
  />
);

class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);


export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
export const BoolRoute = withRouter(connect()(Bool));
