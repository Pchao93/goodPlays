import React from 'react';

class NavBar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
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
          <button onClick={this.props.logout} className="session-button">
            log out
          </button>
          
        </ul>
      </nav>
    );
  }
}

export default NavBar;
