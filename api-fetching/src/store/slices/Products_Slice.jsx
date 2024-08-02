import { createSlice } from "@reduxjs/toolkit";

const initial_State = {
    data : [],
    loading : true,
    data_by_id : null
}

const Products_Slice = createSlice({
    name : 'products',
    initialState : initial_State,
    reducers : {
        set_products_data : (state,actions) => {
           const {payload} = actions
           state.data = payload;
           state.loading = false ; 
        },
        set_single_product : (state,actions) => {
            state.data_by_id = actions.payload
        }
    }
})

export const {set_products_data , set_single_product} = Products_Slice.actions

export default Products_Slice.reducer;