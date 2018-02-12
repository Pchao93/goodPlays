import React from 'react';
import ReviewButtonContainer from '../games/review_button_container';
import onClickOutside from 'react-onclickoutside';

class ReviewForm extends React.Component{
  constructor(props) {
    super(props);

    this.state=({
      value: this.props.review && this.props.review.body ? this.props.review.body : '',
    });
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateReview({
      body: this.state.value,
      id: this.props.review.id
    });
    this.props.closeForm(e);

  }

  handleInput(type) {
    return (e) => {
      this.setState({
          [type]: e.target.value
      });
    };
  }

  handleClickOutside(e) {

    // e.preventDefault();
    this.props.closeForm(e);
  }

  render() {
    return (
    <form
      className='review-form'
    >
      <div className='review-form-header'>
        <h1 className='review-form-header'>{this.props.review && this.props.review.body ? 'Edit your Review' : 'Add a Review'}</h1>
        
        <button
          onClick={this.props.closeForm}>
          <span
            className="close-review-form"
            >x</span>
        </button>
      </div>
      <textarea
        value={this.state.value}
        className='review-form-input'
        placeholder="Enter your review (optional)"
        onChange={this.handleInput('value')}
        ></textarea>
      <button
        onClick={e => this.handleSubmit(e)}
        className='review-form-submit btn'
        >Save</button>
    </form>
  );}
}

export default onClickOutside(ReviewForm);
