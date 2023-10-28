import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import cartReducer from "./features/cart/cartSlice";
import favReducer from "./features/favorites/favSlice";

 const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    fav: favReducer
  },
});

export default store;