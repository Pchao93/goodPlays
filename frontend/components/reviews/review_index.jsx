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
    console.log(this);
    e.preventDefault();
    this.setState({
      edit: false
    });
  }

  render() {
    let {reviews, users, currentUser, game} = this.props;


    let reviewListItems = game.reviews.map(reviewIdx => {
      if (reviews[reviewIdx] && reviews[reviewIdx].body) {


        if (this.state.edit && reviews[reviewIdx].user_id === currentUser.id) {
            return (<ReviewFormContainer
                      key={reviewIdx}
                      edit={true}
                      game={this.props.game}
                      closeForm={this.closeForm}
                      review={reviews[reviewIdx]}/>);
        } else if (reviews[reviewIdx].body) {
            return (
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


    return (
      <ul className='review-container'>
        <h1 className='review-container-title'>Reviews</h1>
        {reviewListItems.length > 0 && reviewListItems}
        {reviewListItems.length === 0 &&
          <h1 className='no-reviews-message'>
            Be the first to review this game!
          </h1>
        }

      </ul>
    );
  }
}

export default ReviewIndex;
