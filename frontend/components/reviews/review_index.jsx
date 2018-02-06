import React from 'react';
import ReviewForm from './review_form';
import ScoreStars from '../games/score_stars';

class ReviewIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false
    };

  }


  render() {
    let {reviews, users, currentUser, game} = this.props;
    console.log(game);
    
    let reviewListItems = game.reviews.map(reviewIdx => {
      console.log(reviews[reviewIdx]);
      console.log(users);
      return ((this.state.edit && reviews[reviewIdx].user_id === currentUser.id) ?
        (<ReviewForm review={reviews[reviewIdx]}/>) :
          (<li className='review' key={reviewIdx}>
            <div className='review-heading'>
            {reviews[reviewIdx] && users[reviews[reviewIdx].user_id] &&

                <span className='review-username'>
                  {users[reviews[reviewIdx].user_id].username}
                </span>} rated it
                {reviews[reviewIdx] && <ScoreStars disableScore={true} score={reviews[reviewIdx].rating}/>}
              </div>
            <div className='review-body'>
              {reviews[reviewIdx] && reviews[reviewIdx].body}
            </div>

          </li>));
    });


    return (
      <ul className='review-container'>
        <h1 className='review-container-title'>Reviews</h1>
        {reviewListItems}
      </ul>
    );
  }
}

export default ReviewIndex;
