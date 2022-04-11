import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {getProductByCode, getProductByName} from '../../api/stockService';

export const addStockItemByCode = createAsyncThunk(
  'stock/addItemByCode',
  async (code, thunkAPI) => {
    const response = await getProductByCode(code);
    thunkAPI.dispatch(addCartItem(response[0]));
    //console.log(response);
    return response;
  },
);

export const searchStockItemByName = createAsyncThunk(
  'stock/searchItemByName',
  async name => {
    const response = await getProductByName(name);
    //console.log(response);
    return response;
  },
);

// const reduceCartItems = items => {
//   let newCartItems = [];
//   items.map(item => {
//     // is Item already in cart
//     let foundItem = newCartItems.findIndex(newItem => newItem.id === item.id);
//     console.log(foundItem);
//     if (foundItem !== -1) {
//       newCartItems[foundItem].qty += 1;
//     } else {
//       newCartItems.push(item);
//     }
//   });
//   return newCartItems;
// };

const stockSlice = createSlice({
  name: 'stock',
  initialState: {
    stockItems: [],
    searchItems: [],
    status: 'idle',
  },
  reducers: {
    addStockItem: (state, action) => {
      let foundItemIndex = state.cartItems.findIndex(
        i => i.id === action.payload.id,
      );

      if (foundItemIndex > -1) {
        if (state.cartItems[foundItemIndex].qty < action.payload.qty) {
          state.cartItems[foundItemIndex].qty += 1;
        } else {
          console.log('No More Items');
        }
      } else {
        const itemMod = Object.assign({}, action.payload, {
          qty: 1,
        });
        let newCartItems = [...state.cartItems, itemMod];
        state.cartItems = reduceCartItems(newCartItems);
      }

      //let newCartItems = [...state.cartItems, action.payload];
    },
    decreaseStockItemQty: (state, action) => {
      //find if item exitsts
      //if qty > 0 decrease qty
      //else remove item
      const foundItemIndex = state.cartItems.findIndex(
        item => item.id === action.payload.id,
      );
      if (foundItemIndex !== -1) {
        const item = state.cartItems[foundItemIndex];
        if (item.qty > 1) {
          state.cartItems[foundItemIndex].qty -= 1;
        } else {
          state.cartItems.splice(foundItemIndex, 1);
        }
      }
    },
    removeStockItem: (state, action) => {
      const foundItemIndex = state.cartItems.findIndex(
        item => item.id === action.payload.id,
      );
      if (foundItemIndex !== -1) {
        state.cartItems.splice(foundItemIndex, 1);
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(addStockItemByCode.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(addStockItemByCode.fulfilled, (state, action) => {})
      .addCase(searchStockItemByName.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(searchStockItemByName.fulfilled, (state, action) => {
        //console.log('payload', action.payload);
        state.searchItems = [...action.payload];
        state.status = 'loading';
      });
  },
});

// Action creators are generated for each case reducer function
export const {
  addStockItem,
  removeStockItem,
  decreaseStockItemQty,
} = stockSlice.actions;

export default stockSlice.reducer;
