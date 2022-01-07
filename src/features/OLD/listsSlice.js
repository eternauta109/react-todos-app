import { createSlice } from "@reduxjs/toolkit";
import {getLists, removeList, addList} from "./thunksLists";

export const listsSlice = createSlice({
    name: "lists",
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(getLists.pending, (state, action) => {})
        .addCase(getLists.fulfilled, (state, action) => {
          state = action.payload;
          console.log("listsSlice state",state)
          return state;
        })
        .addCase(removeList.fulfilled, (state,action)=>{
          state=state.filter(e=> e.id!==action.payload.id)
          return state
        })
        .addCase(addList.fulfilled, (state,action)=>{
          state.unshift(action.payload)
          return state
        })
        
    },
  });

  const { reducer } = listsSlice;
  export default reducer;
  export {getLists, removeList, addList};
 