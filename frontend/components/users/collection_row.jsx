import React from 'react';
import {Link} from 'react-router-dom';
import MiniGame from '../games/mini_game';

export default ({collection, games}) => (
  <div className="collection-row">
    <div className="collection-row-header">
      <Link to={`/collections/${collection.id}`}>
        {collection.name}
      </Link>
    </div>
    <ul className="collection-game-ribbon">
      {
        collection.games.length > 0 && collection.games.slice(0, 6).map(gameId => {
          if (games[gameId]) {
            return (
              <MiniGame
                key={gameId}
                game={games[gameId]}/>
            );
          }
        })
      }
      {collection.games.length > 6 &&
        <Link
          className="elipses-button"
          to={`/collections/${collection.id}`}>
          {`${collection.games.length - 6} more ${collection.games.length - 6 > 1 ? "games"  : "game"}`}
        </Link>
      }
    </ul>
  </div>
);
