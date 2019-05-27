import storeReducer from './storeReducer';
import userReducer from './userReducer';
import cartReducer from './cartReducer';
import productReducer from './productReducer';
import { combineReducers } from 'redux';

export default combineReducers({
  stores: storeReducer,
  user: userReducer,
  cart: cartReducer,
  product: productReducer
})
