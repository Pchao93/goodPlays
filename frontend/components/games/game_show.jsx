import React from 'react';
import { Link } from 'react-router-dom';

class GameShow extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

    this.props.getOneGame(this.props.match.params.gameId);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.gameId !== this.props.match.params.gameId) {
      this.props.getOneGame(nextProps.match.params.gameId);
    }
  }

  render() {
    let { game } = this.props;
    let platforms;
    if (game){
      platforms = this.props.game.platforms.map((platform) => (
        <li className='platform-badge' key={platform.id}>{platform.abreviation}</li>
      ));
    }
    return  game === undefined ? null : (
      <div className='game-show-container'>
        <GameInfoContainer game={game} />
        <div className='game-info-container'>
          <div className="game-list-item">
            <img className='game-cover-art' src={game.image_url}></img>
            <div className='collection-button'>
              <button className='default-collection-button'>Want to Play</button>
              <button className='dropdown-button'><div className='arrow-down'></div> </button>
              <ul className='collection-button-dropdown hidden'>
                <li className='collection-option default'>
                </li>
                <li className='collection-option default'>
                </li>
                <li className='collection-option'>
                </li>
                <li className='collection-option'>
                </li>
                <li className='collection-option'>
                </li>
              </ul>
            </div>
            <div className='rating-button'>
              <span className='rating-text'>Rate this game</span>
              <ul className='rating-stars'>
                <li className='star'>
                  <i className="fa fa-star" aria-hidden="true"></i>
                </li>
                <li className='star'>
                  <i className="fa fa-star" aria-hidden="true"></i>
                </li>
                <li className='star'>
                  <i className="fa fa-star" aria-hidden="true"></i>
                </li>
                <li className='star'>
                  <i className="fa fa-star" aria-hidden="true"></i>
                </li>
                <li className='star'>
                  <i className="fa fa-star" aria-hidden="true"></i>
                </li>
              </ul>
            </div>
          </div>
          <div className='game-data-container'>
            <div className="game-info-header">
              <h1 className="game-title">{game.title}</h1>
              <span className='developer-container'>by <span
                className='developer-name'>{game.developer.name}</span></span>
              <ul className='score-stars'>
                  <li className='star'>
                    <i className="fa fa-star" aria-hidden="true"></i>
                  </li>
                  <li className='star'>
                    <i className="fa fa-star" aria-hidden="true"></i>
                  </li>
                  <li className='star'>
                    <i className="fa fa-star" aria-hidden="true"></i>
                  </li>
                  <li className='star'>
                    <i className="fa fa-star" aria-hidden="true"></i>
                  </li>
                  <li className='star'>
                    <i className="fa fa-star" aria-hidden="true"></i>
                  </li>
                  <li className='score'>
                    5.0
                  </li>
                </ul>
                <div className="stats">
                  <div className='stats-top-row'>
                    <ul className="platform-badges">
                      <label className='game-label'>Platforms:</label>
                      {game && platforms}
                    </ul>

                    <span className='release_date'><span className='game-label'>
                      Released on:</span> May 23, 2015</span>
                  </div>
                  <div className='stats-bottom-row'>
                    <ul className="genre-list">
                      <label className='game-label'>Genres: </label>
                      <span className="placeholder-text">Placeholder text</span>
                    </ul>
                    <span className='release_date'>
                      <span className='game-label'>Rating: </span>
                      <span className="placeholder-text">Placeholder text</span>
                    </span>
                  </div>
                </div>

            </div>

            <div className='game-description'>
              <span className='game-label'>Summary:</span> {game.description}
            </div>

            <a className='amazon-button' href={game.amazon_url}>
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/SellerCentral/legal/amazon-logo_transparent.png">

              </img>
            </a>

          </div>
        </div>
      </div>
    );
  }
}






export default GameShow;
