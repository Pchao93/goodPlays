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
      sessionAction: !this.props.forms,
    };

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeForm = this.closeForm.bind(this);
    this.handleFormButtons = this.handleFormButtons.bind(this);



  }

  update(attribute) {
    return (e) => {
      this.setState({
        [attribute]: e.target.value
      });
    };
  }

  closeForm() {
    this.props.closeSessionForm();
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

  handleSubmit(e) {
    e.preventDefault();
    this.props.searchGames(this.state.searchQuery).then(()=> {
      let query = this.state.searchQuery;
      query = this.state.searchQuery.split(' ').join('+');
      this.props.history.push(`/directory/search/${query}`);
      this.setState({
        searchQuery: ''
      });
    });
  }

  handleFormButtons(action) {
    console.log('click!');
    this.setState({sessionAction: action});
    this.props.openSessionForm();
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
      <button className="btn" onClick={() => this.handleFormButtons('login')} >Log in</button>
      <button className="btn" onClick={() => this.handleFormButtons('signup')}>Sign up</button>
    </div>
  );

    return (
      <nav>
        {this.props.forms && <SessionContainer closeForm={this.closeForm} sessionAction={this.state.sessionAction}/>}
        <ul className="left-nav">
          <Link className='logo' to='/directory'>
            <span>good</span><span>Plays</span>
          </Link>
          <ul className="nav-button-list">
            <li>
              <Link to='/directory'>Browse</Link>
            </li>
            <li>
              <Link to='/collections/my-games'>My Games</Link>
            </li>
          </ul>
          <form
            onSubmit={this.handleSubmit}
            className="search-container">
            <div className="icon-div">
              <i className="fa fa-search" aria-hidden="true"></i>
            </div>

            <input

              placeholder="Search"
              onChange={this.update("searchQuery")} type="search"
              value={this.state.searchQuery}></input>
          </form>
        </ul>

          {display}
      </nav>
    );
  }
}

export default NavBar;
