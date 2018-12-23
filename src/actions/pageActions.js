export const timerAction = seconds => ({ type: 'TIMER', payload: ++seconds });

export const movesAction = moves => ({ type: 'MOVES', payload: ++moves });

export const startGame = cards => {
  return dispatch => {
    (cards => {
      let mixed = cards.sort(() => {
        return Math.random() - 0.5;
      });
      dispatch({
        type: 'START',
        payload: mixed,
      });
    })(cards);
  };
};

export const selectItem = item => ({ type: 'SELECT', payload: item });
