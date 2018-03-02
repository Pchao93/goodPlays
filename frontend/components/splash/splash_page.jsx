import React from 'react';
import {Link} from 'react-router-dom';
import { BeatLoader } from 'react-spinners';

class SplashPage extends React.Component {
  constructor(props) {
    super(props);
    this.props.getAllGames();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    console.log("click");
    this.props.openSessionForm();
  }
  render(){

    const gamesArray = this.props.games.map((game, index) => {

          return (
            <li
              key={game.id}
              className="mini-game">
              <Link
                className='mini-game-show-link'
                to={`/games/${game.id}`}>
                <img
                  className='mini-game-cover-art'
                  src={game.image_url}>
                </img>
                <div className="mini-game-title">{game.title}</div>
              </Link>
            </li>
          );
        }
      );
    

    return (
      <div className="splash-page-container">
        <div className="splash-header">
          <div className="left-background"></div>
          <div className="splash-text-container">

            <div className="splash-text">
              Find Games...
            </div>

            <div className="splash-text">

              Collect Games...
            </div>


            <div className="splash-text">

              Review Games...
            </div>


            <div
              onClick={this.handleClick}
              className="splash-text btn">

              Sign Up
            </div>
          </div>

          <img
            className="splash-image"
            src='https://s3-us-west-1.amazonaws.com/experience.images/splash-image.png'>
          </img>
          <div className="right-background"></div>
        </div>


        <div className="mini-game-index-container">
          <div className="list-header">Featured Games</div>
          <ul className="first-mini-game-list">
            {gamesArray.length > 0 ?
            gamesArray.slice(0, 10) : <div className='featured-spinner'>
              <BeatLoader
                size={75}
                color={'#4b367c'}
                loading={true}
              />
          </div>}
          </ul>

        </div>
      </div>
    );
  }
}
export default SplashPage;
