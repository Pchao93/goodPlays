import React from 'react';
import {Link} from 'react-router-dom';

class Session extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeForm = this.closeForm.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({
          [type]: e.target.value
      });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state)
      .then( () => this.props.history.push(this.props.match.params[0]));
  }

  handleDemo(e) {
    console.log("demo submit!");
    e.preventDefault();
    this.props.login({username: 'demo', password: 'password'})
      .then( () => this.props.history.push(this.props.match.params[0]));
  }

  closeForm(e) {
    if (e.currentTarget === e.target) {
      this.props.history.push(this.props.match.params[0]);
      this.props.clearSessionErrors();
    }
  }

  clearErrors(e) {
    this.props.clearSessionErrors();
  }

  render(){

    let errorsArray = this.props.errors.map((error, idx) => (
      <li key={idx}>{error}</li>
    ));

    let errorsBool = (this.props.errors.length > 0);

    return (
      <div onClick={e => this.closeForm(e)} className='session-form-background'>
        <form className='session-form-modal'>
          <div className='logo-container'>
            <div className='logo'>
              <span>good</span><span>Plays</span>
            </div>
          </div>

          <ul className='tabs'>
            <li
              onClick={ this.props.type === 'signup' ?
                () => this.props.clearSessionErrors() : () => {}}
              className={this.props.type === 'signup' ? '' : 'target'}>
              <Link to={`${this.props.match.params[0]}/login`}>
                Log In
              </Link>
            </li>

            <li
              onClick={ this.props.type === 'signup' ? () => {} :
                () => this.props.clearSessionErrors()}
              className={this.props.type === 'signup' ? 'target' : ''}>
              <Link to={`${this.props.match.params[0]}/signup`}>
                Sign Up
              </Link>
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
            { this.props.type === 'signup' && <label>Email: </label>}
            { this.props.type === 'signup' &&
            <input
              type="text"
              value={this.state.email}
              onChange={this.handleInput('email')}/>}

          <div className="submit-container">
            <button className="btn" onClick={this.handleSubmit}>{this.props.type === 'signup' ? 'Sign Up' : 'Log In'}</button>
            <button className="btn demo" onClick={this.handleDemo}>Demo</button>
          </div>
        </form>
        <div className="close-form-button">
          <Link
            onClick={() => this.props.clearSessionErrors()}
            to={this.props.match.params[0]}>
            x
          </Link>
        </div>
      </div>
    );
  }
}

export default Session;
