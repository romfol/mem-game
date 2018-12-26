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

export const selectItem = (id, color) => ({ type: 'SELECT', payload: id, selectedColor: color });

export const matched = item => ({ type: 'MATCH', payload: item });

export const addShowed = items => ({ type: 'SWOWED', payload: items });
