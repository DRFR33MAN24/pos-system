import {configureStore} from '@reduxjs/toolkit';
import cartReducer from '../src/Reducers/cartSlice';
import stockReducer from '../src/Reducers/stockReducer';

export default configureStore({
  reducer: {
    cart: cartReducer,
    stock: stockReducer,
  },
});
