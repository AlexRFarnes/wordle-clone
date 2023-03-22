import React from 'react';
import Banner from '../Banner/Banner';

function WonBanner({ numOfGuesses, handleResetGame }) {
  return (
    <Banner status='happy'>
      <p>
        <strong>Congratulations!</strong> Got it in{' '}
        <strong>
          {numOfGuesses === 1 ? '1 guess' : `${numOfGuesses} guesses`}
        </strong>
        .
      </p>
      <button onClick={handleResetGame} className='restart-btn'>
        Restart game
      </button>
    </Banner>
  );
}

export default WonBanner;
