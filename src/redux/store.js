import { configureStore } from "@reduxjs/toolkit";
import { apiLinkReducer } from "./reducers/apiLinkSlice";
import { userAuthReducer } from "./reducers/userAuthSlice";
import { counterReducer } from "./reducers/counterSlice";
import { languageReducer } from "./reducers/languageSlice";
import { modeReducer } from "./reducers/modeSlice";
import { cartReducer } from "./reducers/cartSlice";
import { wishlistReducer } from "./reducers/wishlistSlice";

let store = configureStore({
  reducer: {
    counter: counterReducer,
    apiLink: apiLinkReducer,
    auth: userAuthReducer,
    lang: languageReducer,
    mode: modeReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});

export default store;
