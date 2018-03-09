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

    this.setState({sessionAction: action});
    this.props.openSessionForm();
  }

  render() {
    const display = this.props.currentUser ? (
    <div className="user-info" onClick={this.toggleDropdown}>
      <img src=
        {this.props.currentUser.image_url}>
      </img>
      <span>{this.props.currentUser.username}</span>
      <ul className={this.state.userDropdownClass}>
        <li>
          <button onClick={ () => this.props.history.push(`/users/${this.props.currentUser.id}`)}>
            <i className="fa fa-user"></i>
            <span>Profile</span>
          </button>
        </li>
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
              {this.props.currentUser && <Link to='/collections/my-games'>My Games</Link>}
              {!this.props.currentUser && <Link to='/directory'>My Games</Link>}
            </li>
            <li>
              <a className="icon"
                href='https://github.com/Pchao93/goodplays'>
                <svg style={{width: 20}} className="svg-inline--fa fa-github fa-w-16" aria-hidden="true" data-prefix="fab" data-icon="github" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" data-fa-i2svg=""><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z">
                </path></svg>
              </a>
            </li>
            <li>
              <a className="icon"
                href='https://www.linkedin.com/in/patrick-chao-560a0566/'>
                <svg style={{minWidth: 20, maxWidth: 20, width: 20}} className="svg-inline--fa fa-linkedin-in fa-w-14 __web-inspector-hide-shortcut__" aria-hidden="true" data-prefix="fab" data-icon="linkedin-in" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M100.3 480H7.4V180.9h92.9V480zM53.8 140.1C24.1 140.1 0 115.5 0 85.8 0 56.1 24.1 32 53.8 32c29.7 0 53.8 24.1 53.8 53.8 0 29.7-24.1 54.3-53.8 54.3zM448 480h-92.7V334.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V480h-92.8V180.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V480z"></path></svg>
              </a>

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
