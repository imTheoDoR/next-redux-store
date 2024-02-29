import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// set initial state to an empty array
const initialState: {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCard: (
      state,
      action: PayloadAction<{
        id: number;
        title: string;
        price: number;
        image: string;
      }>
    ) => {
      const newItem = action.payload;

      // check if the item is already in the cart
      const existingItem = state.find((item) => item.id === newItem.id);
      if (existingItem) {
        // if the product is already in the cart, we will increase the quantity
        existingItem.quantity += 1;
      } else {
        // if the product is not in the cart, we add it
        state.push({ ...newItem, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      // remove from the cart depending on the product id
      return state.filter((item) => item.id !== action.payload);
    },
    addQuantity: (state, action: PayloadAction<number>) => {
      const item = state.find((item) => item.id === action.payload);

      if (item) {
        item.quantity += 1;
      }
    },
    remQuantity: (state, action: PayloadAction<number>) => {
      const itemIndex = state.findIndex((item) => item.id === action.payload);

      // check if the product exists
      if (itemIndex !== -1) {
        const item = state[itemIndex];

        if (item.quantity > 1) {
          // decrease the quantity
          item.quantity -= 1;
        } else {
          // remove the product if exist
          state.splice(itemIndex, 1);
        }
      }
    },
  },
});

export const { addToCard, removeFromCart, addQuantity, remQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
