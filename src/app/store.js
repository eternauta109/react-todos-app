import { configureStore } from "@reduxjs/toolkit";
/* import todoReducer from "../features/todos/todosSlice"; import per usare i thunk */
import filterReducer from "../features/todos/filterSlice";
/* import listReducer from "../features/list/listsSlice" */
import { listsApi } from "../service/listServiceRTK";
import { todosApi } from "../service/todoServiceRTK";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import logger from "redux-logger";

//middleware con arrow function
/* const myLog = store => nextMioMiddleware=> action=> {
      //store.dispatch({ type: "INIT_MYLOG", payload: null });
      /* console.log("middleware action", action.type);
      console.log('rev', store.getState())
      console.log("middleware action", action.payload); */
/* const res =  nextMioMiddleware(action);
      console.log('result middleware',res)
      return res
    }; */

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    //questa era lafetta di store todos che creavo con i thunk
    /* todos: todoReducer, */
    //ora uso la fetta creata con createapi

    [todosApi.reducerPath]: todosApi.reducer,
    [listsApi.reducerPath]: listsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      logger,
      listsApi.middleware,
      todosApi.middleware
    ),
});

setupListeners(store.dispatch);
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
