import React from 'react';


const GameStats = ({game, platforms, genres}) => (
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
        {game && genres}
      </ul>
      <span className='release_date'>
        <span className='game-label'>Rating: </span>
        <span className="placeholder-text">{game.rating}</span>
      </span>
    </div>
  </div>
);

export default GameStats;
