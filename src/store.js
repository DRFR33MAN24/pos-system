import {configureStore} from '@reduxjs/toolkit';
import cartReducer from '../src/Reducers/cartSlice';

export default configureStore({
  reducer: {
    cart: cartReducer,
  },
});
