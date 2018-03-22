import React from 'react';
import ScoreStars from '../games/score_stars';
import {Link} from 'react-router-dom';



const ReviewListItem = ({review, user, currentUser, handleEdit, destroyReview}) => (
  <li className='review' key={review.id}>
    <img
      className="review-profile-image"
      src={user.image_url}>
    </img>
  <div className='review-heading'>
    <div className='review-heading-left'>
      <Link
        to={`/users/${user.id}`}
        className='review-username'>
          {user && user.username}
        </Link> <span className="rated-it">rated it</span>
        <ScoreStars disableScore={true} score={review.rating}/>

      </div>
      <span className='review-date'>{(new Date(review.created_at)).toDateString()}</span>
    </div>

    <div className='review-body'>
      {review.body}
    </div>

      <div className='review-controls'>
      {currentUser && review.user_id === currentUser.id &&
        <button
          onClick={handleEdit}
          className='review-edit btn'>Edit Review
        </button> }
          {currentUser && review.user_id === currentUser.id && <button
          onClick={() => destroyReview(review.id)}
          className='review-delete btn'>Remove Review</button>}
      </div>

  </li>
);

export default ReviewListItem;
