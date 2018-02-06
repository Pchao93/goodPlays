import React from 'react';
import { Link } from 'react-router-dom';
import CollectionButtonContainer from './collection_button_container';
import ReviewButtonContainer from './review_button_container';

const GameIndexItem = ({game, review, style, toggleHover, divClass, hoverGameId}) => (
  <div className={divClass ? divClass : 'game-list-item'} style={style}>
  <Link className='game-show-link' to={`/games/${game.id}`}><img className='game-cover-art' src={game.image_url}></img>
  <div className='game-title-container'>{game.title}</div>
  </Link>
  <CollectionButtonContainer
    hoverGameId={hoverGameId}
    toggleHover={toggleHover}
    game={game}/>
  <ReviewButtonContainer openForm={()=>{}} review={review} game={game}/>
  </div>
);




export default GameIndexItem;
