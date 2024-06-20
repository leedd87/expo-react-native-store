import { createSlice } from '@reduxjs/toolkit';
import { Product } from '../Products/types';

interface CartProducts {
  cartProducts?: Product[];
}

const initialState: CartProducts = {
  cartProducts: [],
};

const cartSlice = createSlice({
  name: 'cartProducts',
  initialState,
  reducers: {
    addCartProduct: (state, action) => {
      const cartProduct = { ...action.payload };

      state.cartProducts?.push(cartProduct);
    },
    removeCartProduct: (state, action) => {
      const removeCartProductId = action.payload;
      //ESTE FILTER en coloquial
      //todo los productos/elementos
      //que NO sean el mismo id del removeCartProductId van
      // a ser parte del nuevo array (newCartProducts)
      const newCartProducts = state.cartProducts?.filter(
        (product) => product.id !== removeCartProductId
      );

      state.cartProducts = newCartProducts;
    },
  },
});

export const { addCartProduct, removeCartProduct } = cartSlice.actions;

export default cartSlice.reducer;
