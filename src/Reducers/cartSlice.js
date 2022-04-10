import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {getProductByCode, getProductByName} from '../../api/stockService';

export const addItemByCode = createAsyncThunk(
  'cart/addItemByCode',
  async code => {
    const response = await getProductByCode(code);
    console.log(response);
    return response;
  },
);

export const searchItemByName = createAsyncThunk(
  'cart/searchItemByName',
  async name => {
    const response = await getProductByName(name);
    console.log(response);
    return response;
  },
);

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
    searchItems: [],
    status: 'idle',
  },
  reducers: {
    addCartItem: (state, action) => {
      state.cartItems = [...state.cartItems, action.payload];
    },
    removeCartItem: state => {
      //   state.value -= 1;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(addItemByCode.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(addItemByCode.fulfilled, (state, action) => {
        // const newEntities = {};
        // action.payload.forEach(todo => {
        //   newEntities[todo.id] = todo;
        // });
        console.log(action.payload);
        state.cartItems.push(action.payload);
        //state.searchItems = [...state, action.payload];
        state.status = 'idle';
      })
      .addCase(searchItemByName.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(searchItemByName.fulfilled, (state, action) => {
        console.log('payload', action.payload);
        state.searchItems = [...state.searchItems, ...action.payload];
        state.status = 'loading';
      });
  },
});

// Action creators are generated for each case reducer function
export const {addCartItem, removeCartItem} = cartSlice.actions;

export default cartSlice.reducer;
