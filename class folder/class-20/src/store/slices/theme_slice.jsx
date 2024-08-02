import { createSlice } from "@reduxjs/toolkit";


const getInitialThemeMode = () => {
    const storedThemeMode = localStorage.getItem('themeMode')
    return storedThemeMode ? storedThemeMode : 'white'
}

const initial_state ={
    theme_mode: getInitialThemeMode() 
};

const theme_slice = createSlice({
    name:'theme',
    initialState:initial_state,
    reducers:{
        convert_to_black:(state)=>{
            state.theme_mode = 'black';
            localStorage.setItem("themeMode", "black"); 
        },
        convert_to_white:(state)=>{
            state.theme_mode = 'white';
            localStorage.setItem("themeMode", "white"); 
        },
            theme_toggle_dynamic : (state) => {
             state.theme_mode = state.theme_mode === 'white' ? 'black' : 'white'
             localStorage.setItem("themeMode" , state.theme_mode)
        },
        theme_toggle_using_payload:(state, action)=>{
            state.theme_mode = action.payload;
            localStorage.setItem("themeMode", action.payload);
        }
    }
});

export const {convert_to_black, convert_to_white, theme_toggle_dynamic, theme_toggle_using_payload} = theme_slice.actions;

export default theme_slice.reducer;

