import React from 'react';

const ReviewButton = ({game}) => (
  <div className='rating-button'>
    <span className='rating-text'>Rate this game</span>
    <ul className='rating-stars'>
      <li className='star'>
        <i className="fa fa-star" aria-hidden="true"></i>
      </li>
      <li className='star'>
        <i className="fa fa-star" aria-hidden="true"></i>
      </li>
      <li className='star'>
        <i className="fa fa-star" aria-hidden="true"></i>
      </li>
      <li className='star'>
        <i className="fa fa-star" aria-hidden="true"></i>
      </li>
      <li className='star'>
        <i className="fa fa-star" aria-hidden="true"></i>
      </li>
    </ul>
  </div>
);


export default ReviewButton;
