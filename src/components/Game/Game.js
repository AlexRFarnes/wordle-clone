import React from 'react';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import WonBanner from '../WonBanner';
import LostBanner from '../LostBanner';
import Keyboard from '../Keyboard';

// Pick a random word on every pageload.
// const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.

function Game() {
  const [answer, setAnswer] = React.useState(() => sample(WORDS));
  console.info({ answer });
  const [guessesList, setGuessesList] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState('running');

  function handleAddNewGuess(guess) {
    const newGuessesList = [...guessesList, guess];
    setGuessesList(newGuessesList);

    if (guess.toUpperCase() === answer) {
      setGameStatus('won');
    } else if (newGuessesList.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }
  }

  function handleResetGame() {
    setGuessesList([]);
    setGameStatus('running');
    setAnswer(sample(WORDS));
  }

  return (
    <>
      <GuessResults answer={answer} guessesList={guessesList} />
      <GuessInput
        gameStatus={gameStatus}
        handleAddNewGuess={handleAddNewGuess}
      />
      <Keyboard answer={answer} guessesList={guessesList} />
      {gameStatus === 'won' && (
        <WonBanner
          handleResetGame={handleResetGame}
          numOfGuesses={guessesList.length}
        />
      )}
      {gameStatus === 'lost' && (
        <LostBanner handleResetGame={handleResetGame} answer={answer} />
      )}
    </>
  );
}

export default Game;
