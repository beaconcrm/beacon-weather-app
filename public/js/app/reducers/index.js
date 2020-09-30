import { get } from 'lodash';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';


import weather from './weather';


const appReducer = combineReducers({
  weather,
});


// Return a function that returns the state at any level of the redux store.
// Good for getting the top level state, or a more nested level of state
// (more efficient for selectors)
export const getStateByKey = key => state => get(state, key);


export default appReducer;
