import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {getProductByCode} from '../../api/stockService';

export const fetchItemByCode = createAsyncThunk(
  'cart/fetchItemByCode',
  async code => {
    const response = await getProductByCode(code);
    console.log(response);
    return response;
  },
);

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    status: 'idle',
    searchItem: [],
  },
  reducers: {
    addItem: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      //   state.value += 1;
    },
    removeItem: state => {
      //   state.value -= 1;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchItemByCode.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchItemByCode.fulfilled, (state, action) => {
        // const newEntities = {};
        // action.payload.forEach(todo => {
        //   newEntities[todo.id] = todo;
        // });
        state.searchItem = [...state, action.payload];
        state.status = 'idle';
      });
  },
});

// Action creators are generated for each case reducer function
export const {addItem, removeItem} = cartSlice.actions;

export default cartSlice.reducer;
