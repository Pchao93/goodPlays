import React from 'react';

const NotFound = () => (
  <div className='not-found-background'>
    <div className='not-found-background-overlay'>
      <div className='not-found-message-box'>
        <span className='top-text'>We couldn't find what you're looking for...</span>
        <span className='bottom-text'>...But we really tried!</span>
      </div>
    </div>
  </div>
);

export default NotFound;
