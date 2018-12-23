export const middleware = store => next => action => {
  if (action.type === 'SELECT') {
    let selected = store.getState().selected;
    if (selected === action.payload) {
      alert("it's a match");
    }
  }
  return next(action);
};
