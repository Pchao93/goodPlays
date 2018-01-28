import React from 'react';
import {Link} from 'react-router-dom';

class NavBar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const display = this.props.currentUser ? (
    <div>
      <p>Hello, {this.props.currentUser.username}</p>
      <button onClick={this.props.logout}>Logout</button>
    </div>
  ) : (
    <div>
      <Link className="btn" to="/signup">Sign Up</Link>
      <Link className="btn" to="/login">Log In</Link>
    </div>
  );

    return (
      <nav>
        <ul className="NavButtonList">
          <li>
            Future Button
          </li>
          <li>
            Future Button
          </li>
        </ul>
        <ul className="SessionControls">
          {display}
        </ul>
      </nav>
    );
  }
}

export default NavBar;
