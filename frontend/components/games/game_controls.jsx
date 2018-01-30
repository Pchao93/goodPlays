import React from 'react';
import CollectionButtonContainer from './collection_button_container';


const GameControls = ({game}) => (
  <div className="game-list-item">
    <img className='game-cover-art' src={game.image_url}></img>
    <CollectionButtonContainer game={game}/>
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
);

export default GameControls;
