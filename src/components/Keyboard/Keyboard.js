import React from 'react';
import { checkGuess } from '../../game-helpers';
const ROWS = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
];

function Keyboard({ answer, guessesList }) {
  const letterStatus = {};
  const validatedGuesses = guessesList.map(guess => checkGuess(guess, answer));

  validatedGuesses.forEach(guess => {
    guess.forEach(({ letter, status }) => {
      letterStatus[letter] = status;
    });
  });

  return (
    <div className='keyboard'>
      {ROWS.map((row, index) => (
        <div className='keyboard-row' key={index}>
          {row.map(letter => (
            <div
              className={`letter ${letterStatus[letter] || ''}`}
              key={letter}>
              {letter}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
