import React from 'react';
import { Link } from 'react-router-dom';
import CollectionButtonContainer from './collection_button_container';
import ReviewButtonContainer from './review_button_container';

const GameIndexContainer = ({game}) => (
  <div className='game-list-item'>
  <Link className='game-show-link' to={`/games/${game.id}`}><img className='game-cover-art' src={game.image_url}></img>
  <div className='game-title-container'>{game.title}</div>
  </Link>
  <CollectionButtonContainer game={game}/>
  <ReviewButtonContainer game={game}/>
  </div>
);




export default GameIndexContainer;
