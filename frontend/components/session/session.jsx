import React from 'react';
import {Link} from 'react-router-dom';

class Session extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionAction: this.props.sessionAction,
      username: "",
      password: '',
      email: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeForm = this.closeForm.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
    this.toggleAction = this.toggleAction.bind(this);
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.match.params.gameId !== this.props.match.params.gameId) {
  //     this.setState({
  //       email: ''
  //     });
  //   }
  // }

  handleInput(type) {
    return (e) => {
      this.setState({
          [type]: e.target.value
      });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.sessionAction !== 'login') {
      this.props.signup(this.state);
    } else {
      this.props.login(this.state);
    }

  }

  handleDemo(e) {
    e.preventDefault();
    this.props.login({username: 'demo', password: 'password'})
      .then(this.props.closeForm());
  }

  closeForm(e) {
    if (e.currentTarget === e.target) {
      this.setState({
        sessionAction: false
      });
      this.props.closeForm();
      this.props.clearSessionErrors();
    }
  }

  toggleAction(e) {
    e.preventDefault();
    this.setState({
      sessionAction: this.state.sessionAction !== 'login' ? 'login' : 'signup'
    });
    this.props.clearSessionErrors();
  }

  render(){

    let errorsArray = this.props.errors.map((error, idx) => (
      <li key={idx}>{error}</li>
    ));

    let errorsBool = (this.props.errors.length > 0);
    if (!this.state.sessionAction) {
      return null;
    }
    return (
      <div onClick={e => this.closeForm(e)} className='session-form-background'>
        <form onSubmit={this.handleSubmit}className='session-form-modal'>
          <div className='logo-container'>
            <div className='logo'>
              <span>good</span><span>Plays</span>
            </div>
          </div>

          <ul className='tabs'>
            <li
              onClick={ this.state.sessionAction !== 'login' ?
                this.toggleAction : () => {}}
              className={this.state.sessionAction !== 'login' ? '' : 'target'}>
              <span >
                Log In
              </span>
            </li>

            <li
              onClick={ this.state.sessionAction !== 'login' ? () => {} :
                this.toggleAction}
              className={this.state.sessionAction !== 'login' ? 'target' : ''}>
              <span >
                Sign Up
              </span>
            </li>

          </ul>
          {errorsBool && <ul className='error-container'>
            {errorsArray}
          </ul> }
          <label>Username: </label>
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleInput('username')}
              autoFocus='true'
              />

          <label>Password: </label>
            <input
              type="password"
              value={this.state.password}
              onChange={this.handleInput('password')}/>
            { this.state.sessionAction !== 'login' && <label>Email: </label>}
            { this.state.sessionAction !== 'login' &&
            <input
              type="email"
              value={this.state.email}
              onChange={this.handleInput('email')}/>}

          <div className="submit-container">
            <button className="btn">{this.state.sessionAction !== 'login' ? 'Sign Up' : 'Log In'}</button>
            <button className="btn demo" onClick={this.handleDemo}>Demo</button>
          </div>
        </form>
        <div className="close-form-button">
          <a
            onClick={this.closeForm}>
            x
          </a>
        </div>
      </div>
    );
  }
}

export default Session;
