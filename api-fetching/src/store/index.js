import { configureStore } from "@reduxjs/toolkit";
import Products_Slice from "./slices/Products_Slice";

const store = configureStore({
    reducer : {
        products : Products_Slice
    }
})

export {store}