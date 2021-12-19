
// import the createStore:
import { createStore, combineReducers } from 'redux';

// import the .composeWithDevTools
import { composeWithDevTools } from 'redux-devtools-extension';

import catogries from './catogry';
import product from './product'

let reducers = combineReducers({ catogries,product });

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();