import React from 'react';
import ReviewFormContainer from './review_form_container';
import ReviewListItem from './review_list_item';

class ReviewIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false
    };
    this.handleEdit = this.handleEdit.bind(this);
    this.closeForm = this.closeForm.bind(this);

  }

  handleEdit(e) {
    e.preventDefault();
    this.setState({
      edit: true
    });
  }

  closeForm(e) {

    this.setState({
      edit: false
    });
  }

  render() {
    let {reviews, users, currentUser, game} = this.props;


    let reviewListItems = [];
    game.reviews.forEach(reviewIdx => {
      if (reviews[reviewIdx] && reviews[reviewIdx].body) {


        if (this.state.edit && reviews[reviewIdx].user_id === currentUser.id) {
            reviewListItems.push(<ReviewFormContainer
                      key={reviewIdx}
                      edit={true}
                      game={this.props.game}
                      closeForm={this.closeForm}
                      review={reviews[reviewIdx]}/>);
        } else if (reviews[reviewIdx].body) {
            reviewListItems.push(
            <ReviewListItem
              key={reviewIdx}
              review={reviews[reviewIdx]}
              currentUser={currentUser}
              user={users[reviews[reviewIdx].user_id]}
              handleEdit={this.handleEdit}
              destroyReview={this.props.destroyReview}/>
          );
        }
      }
    });

    reviewListItems.sort((a, b)=>{

      
      return b.props.review.id - a.props.review.id;
    });




    return (
      <ul className='review-container'>
        <h1 className='review-container-title'>Reviews</h1>
        {reviewListItems.length > 0 && reviewListItems}
        {reviewListItems.length === 0 && !this.props.edit &&
          <h1
            onClick={(e) => {
              this.props.toggleEdit(e);
              this.props.handleEdit;

            }}
            className='no-reviews-message'>
            Be the first to write a review!
          </h1>
        }

      </ul>
    );
  }
}

export default ReviewIndex;
