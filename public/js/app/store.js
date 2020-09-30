import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';


import reducers from './reducers';

// Add logging middleware in development

const logger = createLogger({
  collapsed: true,
});

const middleware = applyMiddleware(
  thunkMiddleware,
  logger,
);

// Create the redux store
const store = createStore(
  reducers,
  middleware,
);

export default store;
