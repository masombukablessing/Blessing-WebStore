// Redux store configuration

import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk'; // Use default export
import userReducer from './reducers/userReducer';
import productReducer from './reducers/productReducer';
import cartReducer from './reducers/cartReducer';

const rootReducer = combineReducers({
  user: userReducer,
  products: productReducer,
  cart: cartReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;