import React from 'react';

class ReviewButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = ({
      rating: this.props.review ? this.props.review.rating : 0
    });

    this.action = this.props.review ? this.props.updateReview : this.props.createReview;
    this.handleClick = this.handleClick.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.currentUser || !nextProps.review) {
      this.setState({
        rating: 0
      });
      this.action = nextProps.createReview;
    } else if (!this.props.review && nextProps.review) {

      this.setState({
        rating: nextProps.review.rating
      });
      this.action = nextProps.review ? nextProps.updateReview : nextProps.createReview;
    } else if (this.props.review && nextProps.review && this.props.review.rating != nextProps.review.rating) {

      this.setState({
        rating: nextProps.review.rating
      });
      this.action = nextProps.review ? nextProps.updateReview : nextProps.createReview;
    }
  }

  handleClick(e) {
    e.persist();
    let id;
    if (!this.props.currentUser) {
      this.props.receiveSessionErrors({responseJSON: ["You must be signed in to review a game."]});
      this.props.openSessionForm();
    } else {
      if (this.props.review) {
        id = this.props.review.id;
      }

      this.action({
        rating: e.currentTarget.getAttribute('data'),
        id
      }).then(() => {
        if (this.props.openForm) {
          this.props.openForm(e);
        }

      });
    }
  }

  handleMouseEnter(e, value) {
    this.setState({
      rating: e.target.getAttribute('data')
    });
  }

  handleMouseLeave(e) {
    this.setState({
      rating: this.props.review ? this.props.review.rating : 0
    });
  }

  render() {
    let {game, rating} = this.props;
    let i = this.state.rating;
    const stars = {
      1: (<i className="fa fa-star" aria-hidden="true"></i>),
      0: (<i className="fa fa-star-o" aria-hidden="true"></i>),
    };

    const starValues = [];

    while (i > 0) {
      starValues.push(1);
      i -= 1;
    }
    while (starValues.length < 5) {
      starValues.push(0);
    }

    return (
      <div className='rating-button'>
        <span className='rating-text'>{this.props.review ? 'My Rating:': 'Rate this game'}</span>
        <ul className='rating-stars'>
          <li
            data={1}
            onClick={this.handleClick}
            onMouseLeave={this.handleMouseLeave}
            onMouseEnter={this.handleMouseEnter}
            className='star'>
            {stars[starValues[0]]}
          </li>
          <li
            data={2}
            onClick={this.handleClick}
            onMouseLeave={this.handleMouseLeave}
            onMouseEnter={this.handleMouseEnter}
            className='star'>
            {stars[starValues[1]]}
          </li>
          <li
            data={3}
            onClick={this.handleClick}
            onMouseLeave={this.handleMouseLeave}
            onMouseEnter={this.handleMouseEnter}
            className='star'>
            {stars[starValues[2]]}
          </li>
          <li
            data={4}
            onClick={this.handleClick}
            onMouseLeave={this.handleMouseLeave}
            onMouseEnter={this.handleMouseEnter}
            className='star'>
            {stars[starValues[3]]}
          </li>
          <li
            data={5}
            onClick={this.handleClick}
            onMouseLeave={this.handleMouseLeave}
            onMouseEnter={this.handleMouseEnter}
            className='star'>
            {stars[starValues[4]]}
          </li>
        </ul>
      </div>
    );
  }
}




//
// return (
//   <ul className='score-stars'>
//     <li className='star'>
//       {stars[starValues.shift()]}
//     </li>
//     <li className='star'>
//       {stars[starValues.shift()]}
//     </li>
//     <li className='star'>
//       {stars[starValues.shift()]}
//     </li>
//     <li className='star'>
//       {stars[starValues.shift()]}
//     </li>
//     <li className='star'>
//       {stars[starValues.shift()]}
//     </li>
//     <li className='score'>
//       { score }
//     </li>
//   </ul>
// );


export default ReviewButton;
