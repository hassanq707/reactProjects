import { configureStore } from "@reduxjs/toolkit";
import user_data_slice from "./slices/user_data_slice";
import theme_slice from "./slices/theme_slice";

const store = configureStore({
    reducer:{
        user_data: user_data_slice,
        theme:theme_slice
    }

})


export {store}