import React from 'react';
import ScoreStars from '../games/score_stars';
import {Link} from 'react-router-dom';


const UserProfileReviewListItem = ({review, user, game}) => (
  <li className='user-review' key={review.id}>
  <div className='review-heading'>
    <div className='review-heading-left'>
      <span

        className='user-review-username'>
          {user && user.username}
        </span><span className="rated"> rated</span> <Link
          to={`/games/${game.id}`}
          className='review-username game-link'> {game.title}</Link>
        <ScoreStars disableScore={true} score={review.rating}/>

      </div>
      <span className='review-date'>{(new Date(review.created_at)).toDateString()}</span>
    </div>

    <div className='review-body'>
      {review.body}
    </div>

  </li>
);

export default UserProfileReviewListItem;
