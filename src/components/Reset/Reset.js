import React from 'react';
import './styles.css';

export const Reset = props => {
  return (
    <button
      onClick={() => {
        props.startGame(props.cards);
      }}
    >
      Play again
    </button>
  );
};
