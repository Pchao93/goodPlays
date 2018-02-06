import React from 'react';


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

  render() {
    return (
    <form
      className='review-form'
    >
      <div className='review-form-header'>
        <h1 className='review-form-header'>Add a Review</h1>
        <button
          className="close-review-form"
          onClick={this.props.closeForm}
          >x</button>
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

export default ReviewForm;
