import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./reducers/CounterSlice";
import { apiLinkReducer } from "./reducers/apiLinkSlice";

let store=configureStore({
    reducer:{
        counter:counterReducer,
        apiLink:apiLinkReducer
    }
})

export default store
