import React from 'react';
import ScoreStars from './score_stars';
import GameStats from './game_stats';

const GameData = ({game, platforms}) => (

  <div className="game-info-header">
    <h1 className="game-title">{game.title}</h1>
    <span className='developer-container'>by <span
      className='developer-name'>{game.developer}</span></span>
    <ScoreStars score={4.5} />
    <GameStats game={game} platforms={platforms}/>
  </div>


);

export default GameData;
