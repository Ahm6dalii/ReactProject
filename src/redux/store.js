import { configureStore } from "@reduxjs/toolkit";
import { apiLinkReducer } from "./reducers/apiLinkSlice";
import { userAuthReducer } from "./reducers/userAuthSlice";
import { languageReducer } from "./reducers/languageSlice";
import { modeReducer } from "./reducers/modeSlice";


let store=configureStore({
    reducer:{
        apiLink:apiLinkReducer,
        auth:userAuthReducer,
        lang:languageReducer,
        mode:modeReducer

    }
})

export default store
