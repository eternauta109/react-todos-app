import { createAsyncThunk } from "@reduxjs/toolkit";
import { filterTodo } from "./filterSlice";
import {
  getTodos as fetchTodos,
  getFilter,
  removeTodo as removeItem,
  newTodo,
  changeToggle,
} from "../../service/todoService";

export const getTodos = createAsyncThunk(
  "todos/getTodos",
  async (data = null, { dispatch }) => {
    let [todos, activeFilter] = await Promise.all([fetchTodos(), getFilter()]);

    console.log("promise thunk function", todos, activeFilter);

    const filter = activeFilter[0];

    dispatch(filterTodo(filter));

    todos = todos.filter((todo) => {
      if (filter === "ALL") {
        return true;
      }
      if (filter === "COMPLETED") {
        return todo.completed;
      }
      return !todo.completed;
    });
    console.log("todos da thunk", todos);
    return todos;

    /* console.log('response thunk function', response ) */
    /* return response */
  }
);

export const removeTodo = createAsyncThunk(
  "todos/removeTodos",
  async (todo, { dispatch }) => {
    const res = await removeItem(todo);
    console.log("res thunk remove todo", res);
    return todo;
  }
);

export const addTodo = createAsyncThunk(
  "todos/addTodo",
  async (todo, { dispatch }) => {
    todo.completed = false;
    return await newTodo(todo);
  }
);

export const toggleTodo = createAsyncThunk(
  "todos/toggle",
  async (todo, { dispatch }) => {
    /* console.log('toggle', todo, dispatch) */
    return await changeToggle(todo);
  }
);

//con i thunk abbandono lo stato iniziale statico dello store
//per gestire dati asincroni con un service API
/* const initTodos = {
    todos:[
    {
        name: "call my mum",
        completed: true,
        dueDate: new Date().toLocaleDateString(),
        user_id: 1,
        id: 1
    },
    {
        name: "go to school",
        completed: true,
        dueDate: new Date().toLocaleDateString(),
        user_id: 1,
        id: 2
    },
    {
        name: "go to the work fuck",
        completed: false,
        dueDate: new Date().toLocaleDateString(),
        user_id: 1,
        id: 3
    },
],
filter:'ALL'
} */
