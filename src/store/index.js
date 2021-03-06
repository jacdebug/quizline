import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import quizReducers from '../reducers';

const middleware = [thunk];
/* eslint-disable no-underscore-dangle */
const composeEnhancers = typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
      {
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      }
    )
  : compose;
/* eslint-enable */

const enhancer = composeEnhancers(applyMiddleware(...middleware));

const store = createStore(
  combineReducers({
    quizReducers,
  }),
  enhancer
);

export default store;
