import React from 'react';
import GameData from './game_data';
import GameControls from './game_controls';

const GameInfoBox = ({ game, platforms, currentUser, openForm, review, genres}) => (
  <div className='game-info-container'>

    <GameControls
      openForm={openForm}
      game={game}
      review={review}/>

    <div className='game-data-container'>

      <GameData game={game} genres={genres} platforms={platforms}/>

      <div className='game-description'>
        <span className='game-label'>Summary:</span> {game.description}
      </div>

      <a target="_blank" className='amazon-button' href={game.amazon_url}>
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/SellerCentral/legal/amazon-logo_transparent.png">
        </img>
      </a>



    </div>
  </div>
);

export default GameInfoBox;
