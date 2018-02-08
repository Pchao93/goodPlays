import React from 'react';
import ScoreStars from './score_stars';
import GameStats from './game_stats';

const GameData = ({game, platforms, genres}) => (

  <div className="game-info-header">
    <h1 className="game-title">{game.title}</h1>
    <span className='developer-container'>by <span
      className='developer-name'>{game.developer}</span></span>
    <ScoreStars score={game.average_score} />
    <GameStats game={game} genres={genres} platforms={platforms}/>
  </div>


);

export default GameData;
