import { createAsyncThunk } from "@reduxjs/toolkit";
import { getLists as gt, removeList as rl,newList } from "../../service/listsServiceThunk";

export const getLists = createAsyncThunk(
  "lists/getLists",
  async (data = null, { dispatch }) => {
    let lists = await gt();

    console.log("list da thunk", lists);
    return lists;
  }
);

export const removeList = createAsyncThunk(
  "lists/removeList",
  async (list, { dispatch }) => {
    const res = await rl(list);
    console.log("res thunk remove list", res);
    return list;
  }
);

export const addList = createAsyncThunk(
  "lists/addList",
  async (list, { dispatch }) => {
    /* todo.completed = false; */
    return await newList(list);
  }
);
