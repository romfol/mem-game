const initialState = {
  seconds: 0,
  moves: 0,
  cards: [
    {
      color: 'red',
      id: 1,
    },
    {
      color: 'green',
      id: 2,
    },
    {
      color: 'blue',
      id: 3,
    },
    {
      color: 'yellow',
      id: 4,
    },
    {
      color: 'black',
      id: 5,
    },
    {
      color: 'pink',
      id: 6,
    },
    {
      color: 'aqua',
      id: 7,
    },
    {
      color: 'orange',
      id: 8,
    },
    {
      color: 'red',
      id: 9,
    },
    {
      color: 'green',
      id: 10,
    },
    {
      color: 'blue',
      id: 11,
    },
    {
      color: 'yellow',
      id: 12,
    },
    {
      color: 'black',
      id: 13,
    },
    {
      color: 'pink',
      id: 14,
    },
    {
      color: 'aqua',
      id: 15,
    },
    {
      color: 'orange',
      id: 16,
    },
  ],
  //cardsToggle: false,
  selectedColor: '',
  id: '',
  matched: [],
  showed: [],
  checked: [],
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'TIMER':
      return { ...state, seconds: action.payload };
    case 'MOVES':
      return { ...state, moves: action.payload };
    case 'START':
      return {
        ...state,
        moves: 0,
        seconds: 0,
        cards: action.payload,
        //cardsToggle: !state.cardsToggle,
        checked: [],
        showed: [],
      };
    case 'SELECT':
      return {
        ...state,
        checked: state.checked.concat(action.payload),
        selectedColor: action.selectedColor,
      };
    case 'MATCH':
      return { ...state, showed: state.showed.concat(action.payload) };
    case 'SHOWED':
      return { ...state, showed: state.showed.concat(action.payload) };
    default:
      return state;
  }
}
