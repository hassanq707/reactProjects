import { configureStore } from "@reduxjs/toolkit";
import Todo_Slice from "./slices/Todo_Slice";

const store = configureStore({
    reducer : {
        TodoList : Todo_Slice
    }
})

export {store}
