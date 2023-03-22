import React from 'react';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Guess from '../Guess/Guess';

function GuessResults({ guessesList, answer }) {
  return (
    <div className='guess-results'>
      {range(NUM_OF_GUESSES_ALLOWED).map(num => (
        <Guess answer={answer} key={num} guess={guessesList[num]} />
      ))}
    </div>
  );
}

export default GuessResults;
