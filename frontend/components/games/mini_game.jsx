import React from "react";
import {Link} from 'react-router-dom';

export default ({game}) => (
  <li
    className="mini-game">
    <Link
      className='mini-game-show-link'
      to={`/games/${game.id}`}>
      <img
        className='mini-game-cover-art'
        src={game.image_url}>
      </img>
      <div className="mini-game-title">{game.title}</div>
    </Link>
  </li>
);
