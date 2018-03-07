import React from 'react';
import MiniGame from '../games/mini_game';

export default ({collection, games}) => (
  <div className="collection-row">
    <div className="colection-row-header">
      {collection.name}
    </div>
    <ul className="collection-game-ribbon">
      {
        collection.games.length > 0 && collection.games.map(gameId => {
          if (games[gameId]) {
            return (
              <MiniGame
                key={gameId}
                game={games[gameId]}/>
            );
          }
        })
      }
    </ul>
  </div>
);
