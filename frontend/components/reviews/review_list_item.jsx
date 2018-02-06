import React from 'react';
import ScoreStars from '../games/score_stars';



const ReviewListItem = ({review, user, currentUser, handleEdit, destroyReview}) => (
  <li className='review' key={review.id}>
  <div className='review-heading'>
    <div className='review-heading-left'>
      <span className='review-username'>
          {user && user.username}
        </span> rated it
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
