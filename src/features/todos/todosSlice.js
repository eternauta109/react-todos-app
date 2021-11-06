import { createSlice } from "@reduxjs/toolkit";
import { getTodos, removeTodo, addTodo,toggleTodo } from "./thunksTodos";

export const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    /* addTodo(state, action) {
       console.log('todoslice reducers', state, action)
      state.push(action.payload);
    }, 
   /*  removeTodoSlice(state, action) {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
    toggleTodo(state, action) {
      const id = action.payload.id;
      state.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    }, */
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTodos.pending, (state, action) => {})
      .addCase(getTodos.fulfilled, (state, action) => {
        state = action.payload;
        return state;
      })
      .addCase(removeTodo.fulfilled, (state, action) => {
        state = state.filter(element => element.id !== action.payload.id)
        return state;
      })      
      .addCase(toggleTodo.fulfilled, (state, action) => {
        const idx= state.findIndex(ele=> ele.id===action.payload.id);
        console.log('idx',idx);
        if(idx !== -1){
          state.splice(idx,1,action.payload)
          
        }
        return state;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.unshift(action.payload);
        return state;       
      })
  },
});

/* console.log('todoslice', todosSlice); */
const { reducer } = todosSlice;
/* console.log('reducer', reducer); */
/* export const { toggleTodo, addTodo } = actions; */
export default reducer;
export { getTodos, removeTodo, addTodo,toggleTodo };
