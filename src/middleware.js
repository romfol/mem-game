export const middleware = store => next => action => {
  if (action.type === 'SELECT') {
    console.log(action.payload);
  }
  return next(action);
};
