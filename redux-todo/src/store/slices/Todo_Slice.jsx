import { createSlice } from "@reduxjs/toolkit";

const initial_State = {
    todo : []
}

const Todo_Slice = createSlice({
    name : "Todo",
    initialState : initial_State,
    reducers : {
        set_todo_list : (state,action) => {
          const {payload} = action
          state.todo.push(payload)
        },
        set_Del_All : (state) => {
           state.todo = [] 
        },
        set_del_single : (state,action) => {
            const{payload} = action;
          state.todo = state.todo.filter((elem) => {
            return elem.id != payload;
          })
        },
        set_edit_single : (state,action) => {
            const{payload} = action;
            state.todo = state.todo.map((elem) => {
                if(elem.id == payload.id){
                  return {...elem , inputData : payload.input}
                }
                else{
                    return elem
                }
            })
        }
    }
})

export const {set_todo_list,set_Del_All,set_del_single,set_edit_single} = Todo_Slice.actions
export default Todo_Slice.reducer