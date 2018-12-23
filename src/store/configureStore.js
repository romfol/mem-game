import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from '../reducers/rootReducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { middleware } from '../middleware';

export const store = createStore(rootReducer, applyMiddleware(thunk, middleware, logger));
