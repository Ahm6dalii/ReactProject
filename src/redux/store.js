import { configureStore } from "@reduxjs/toolkit";
import { apiLinkReducer } from "./reducers/apiLinkSlice";

let store = configureStore({
    reducer: {
        apiLink: apiLinkReducer
    }
})

export default store
