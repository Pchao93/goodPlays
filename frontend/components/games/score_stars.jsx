import React from 'react';

//receive the score
//calculate how many stars need to be full
//figure out the half star


const ScoreStars = ({ disableScore, score }) => {
  let i = score;
  if (score === null) {
    i = 0;
    score = 0.0;
  }
  const stars = {
    1: (<i className="fa fa-star" aria-hidden="true"></i>),
    0: (<i className="fa fa-star-o" aria-hidden="true"></i>),
    0.5: (<i className="fa fa-star-half-o" aria-hidden="true"></i>)
  };
  const starValues = [];
  while (i >= 1) {
    starValues.push(1);
    i -= 1;
  }
  if (i !== 0) {
    starValues.push(0.5);
  }
  while (starValues.length < 5) {
    starValues.push(0);
  }

  return (
    <ul className='score-stars'>
      <li className='star'>
        {stars[starValues.shift()]}
      </li>
      <li className='star'>
        {stars[starValues.shift()]}
      </li>
      <li className='star'>
        {stars[starValues.shift()]}
      </li>
      <li className='star'>
        {stars[starValues.shift()]}
      </li>
      <li className='star'>
        {stars[starValues.shift()]}
      </li>
      <li className='score'>
        { !disableScore && score }
      </li>
    </ul>
  );
};

export default ScoreStars;
