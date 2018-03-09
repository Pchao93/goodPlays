import React from 'react';
import ReviewListItem from './user_profile_review_item';

export default ({user, games, reviews}) => {
  const reviewListItems = [];
  // if (user){
    reviews.forEach(review => {
      if (review.body) {
        reviewListItems.push(
          <ReviewListItem
              key={review.id}
              review={review}
              game={games[review.game_id]}
              user={user}/>
        );
      }
    });
    reviewListItems.sort((a, b)=>{
      return b.props.review.id - a.props.review.id;
    });
  // }



  return (
    <ul className='review-container'>
      <h1 className='review-container-title'>Reviews</h1>
      {reviewListItems.length > 0 && reviewListItems}
      {reviewListItems.length === 0 &&
        <h1

          className='no-reviews-message'>
          Looks like there aren't any reviews!
        </h1>
      }

    </ul>

  );
};
