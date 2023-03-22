import React from 'react';

function GuessInput({ handleAddNewGuess, gameStatus }) {
  const [guess, setGuess] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

    handleAddNewGuess(guess);

    setGuess('');
  }

  return (
    <form onSubmit={handleSubmit} className='guess-input-wrapper'>
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        disabled={gameStatus !== 'running'}
        value={guess}
        onChange={event => setGuess(event.target.value.toUpperCase())}
        type='text'
        id='guess-input'
        pattern='[a-zA-Z]{5}'
        required={true}
        title='5 letter word'
        minLength={5}
        maxLength={5}
      />
    </form>
  );
}

export default GuessInput;
