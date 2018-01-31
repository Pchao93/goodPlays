import React from 'react';
import {Link} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../../utils/route_utils';
import SessionContainer from '../session/session_container';

class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userDropdownClass: "user-dropdown hidden",
      searchQuery: "",
      backgroundClass: ""
    };

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.update = this.update.bind(this);
  }

  update(attribute) {
    return (e) => {

      if (e.target.value) {
        this.setState({
          backgroundClass: 'white',
          [attribute]: e.target.value
        });
      } else {
        this.setState({
          backgroundClass: '',
          [attribute]: e.target.value
        });
      }
    };
  }

  toggleHelper(toggleClass, classOne, classTwo) {
    return this.state[toggleClass] === classOne ?
      classTwo : classOne;
  }

  toggleDropdown() {
    let newClass = this.toggleHelper(
      'userDropdownClass',
      'user-dropdown hidden',
      'user-dropdown');
    this.setState({
      userDropdownClass: newClass
    });
  }

  render() {
    const display = this.props.currentUser ? (
    <div className="user-info" onClick={this.toggleDropdown}>
      <img src=
        "https://s3.amazonaws.com/i.seelio.com/f3/b3/f3b38e0625012600f8c71693e75443dc526c.jpg">
      </img>
      <span>{this.props.currentUser.username}</span>
      <ul className={this.state.userDropdownClass}>
        <li>
          <button onClick={this.props.logout}>
            <i className="fa fa-sign-out" aria-hidden="true"></i>
            <span>Log Out</span>
          </button>
        </li>
      </ul>
    </div>
  ) : (
    <div className="session-controls">
      <Link className="btn" to={`${this.props.location.pathname}/login/`}>Log in</Link>
      <Link className="btn" to={`${this.props.location.pathname}/signup/`}>Sign up</Link>
    </div>
  );

    return (
      <nav>
        <ul className="left-nav">
          <Link className='logo' to='/'>
            <span>good</span><span>Plays</span>
          </Link>

          <ul className="nav-button-list">
          </ul>
          <div className="search-container">
            <div className="icon-div">
              <i className="fa fa-search" aria-hidden="true"></i>
            </div>
            <span className="search">Search</span>
            <input
              className={this.state.backgroundClass}
              onChange={this.update("searchQuery")} type="search"
              value={this.state.searchQuery}></input>
          </div>
        </ul>

          {display}
        <AuthRoute path={`*/login`} component={SessionContainer} />
        <AuthRoute path={`*/signup`} component={SessionContainer} />
      </nav>
    );
  }
}

export default NavBar;
