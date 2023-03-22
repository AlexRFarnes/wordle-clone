import React from 'react';
import Banner from '../Banner/Banner';

function LostBanner({ answer, handleResetGame }) {
  return (
    <Banner status='sad'>
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
      <button onClick={handleResetGame} className='restart-btn'>
        Restart game
      </button>
    </Banner>
  );
}

export default LostBanner;
