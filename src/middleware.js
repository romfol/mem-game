import { matched, movesAction, addShowed } from './actions/pageActions';

export const middleware = store => next => action => {
  if (action.type === 'SELECT') {
    if (store.getState().checked.length > 1) {
      let showed = store.getState().checked.splice(0, 2);
      store.dispatch(addShowed(showed));
      store.dispatch(movesAction(store.getState().moves));
    }
    let selected = store.getState().selectedColor;
    //matching
    if (selected === action.selectedColor) {
      if (store.getState().checked.length) {
        let arr = store
          .getState()
          .checked.slice()
          .concat(action.payload);
        store.dispatch(matched(arr));
      }
    }
  }
  return next(action);
};
