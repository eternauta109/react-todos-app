import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todos/todosSlice";
import filterReducer from "../features/todos/filterSlice";

/* console.log('store todoreducer', todoReducer) */


//middleware con funzioni
/* const myLog = (store) => {
  console.log("init my log");
  return function myDispatch(nextMioMiddleware) {
   console.log(nextMioMiddleware)

    return function myAction(action) {
      store.dispatch({ type: "INIT_MYLOG", payload: null });
      console.log("middleware action", action);
      nextMioMiddleware(action)
    };
  };
}; */

//middleware con arrow function
const myLog = store => nextMioMiddleware=> action=> {
      //store.dispatch({ type: "INIT_MYLOG", payload: null });
      /* console.log("middleware action", action.type);
      console.log('rev', store.getState())
      console.log("middleware action", action.payload); */
      const res =  nextMioMiddleware(action);
      /* console.log('result middleware',res) */
      return res
    };




export const store = configureStore({
  reducer: {
    filter: filterReducer,
    todos: todoReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(myLog),
});
