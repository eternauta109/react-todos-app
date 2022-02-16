import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  user: null,
  token: null,
};

const todoData = localStorage.getItem("todolist-data");

if (todoData) {
  const data = JSON.parse(todoData);
  if (data && data.access_token) {
    //nel tokne=> header.content.passkey
    //per prendere il contenuto possiamo fare split

    //atob->metodo js per codificare da base64 to stringa
    const tokenInfo = JSON.parse(atob(data.access_token.split(".")[1]));
    const expData = new Date(tokenInfo.exp * 1000); //prendo quando expire il token

    if (expData < new Date()) {
      //se il token è scaduto
      //o facciamo refresh token per rinnovarlo
      //o delete token per eliminarlo
      localStorage.removeItem("todolist-data");
    } else {
      initialState = {
        user: { name: data.name, email: data.email },
        token: data.access_token,
      };
    }
  }
}

export const UserSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLogin(draft, action) {
      const data = action.payload;
      if (data && data.name) {
        localStorage.setItem("todolist-data", JSON.stringify(data));
        draft.user = { name: data.name, email: data.email };
        draft.token = data.access_token;
      } else {
        draft.user = null;
      }
    },
    userLogout(draft) {
      localStorage.removeItem("todolist-data");
      draft.user = null;
    },
    userRegister(draft, action) {
      const data = action.payload;
      console.log(data);
      if (data && data.name) {
        localStorage.setItem("todolist-data", JSON.stringify(data));
        draft.user = { name: data.name, email: data.email };
        draft.token = data.access_token;
      } else {
        draft.user = null;
      }
    },
  },
});

export const { userLogin, userLogout, userRegister } = UserSlice.actions;
export default UserSlice.reducer;
