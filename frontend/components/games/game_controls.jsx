import React from 'react';
import CollectionButtonContainer from './collection_button_container';
import { Link } from 'react-router-dom';
import ReviewButtonContainer from './review_button_container';

const GameControls = ({game, currentUser, review, openForm}) => (
  <div className="game-list-item">
    <Link to={`/games/${game.id}`}><img className='game-cover-art' src={game.image_url}></img></Link>
    <CollectionButtonContainer game={game}/>
    <ReviewButtonContainer
      openForm={openForm}
      game={game}
      review={review} />

  </div>
);

export default GameControls;
