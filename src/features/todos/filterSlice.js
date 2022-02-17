import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: "ALL",
  reducers: {
    filterTodo(state, action) {
      /*  console.log('filter todo',action, action.payload, state) */
      return action.payload;
    },
  },
});

const { actions, reducer } = filterSlice;
export default reducer;
export const { filterTodo } = actions;
