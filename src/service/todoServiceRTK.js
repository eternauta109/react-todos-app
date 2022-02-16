import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TODO_URL } from "../config";

export const todosApi = createApi({
  reducerPath: "todos",
  tagTypes: ["TODOS"],
  baseQuery: fetchBaseQuery({
    baseUrl: TODO_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      headers.set("Accept", `application/json`);
      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),

  endpoints: (builder) => ({
    getTodos: builder.query({
      query: (list_id = "") => "?list_id=" + list_id,
      providesTags: (res, err) => {
        if (err || !res || res.data) {
          return [{ type: "TODOS" }];
        }
        return res.data.map((e) => ({ type: "TODOS", id: e.id }));
      },
    }),
    deleteTodos: builder.mutation({
      query: (id) => ({
        url: "/" + id,
        method: "DELETE",
      }),
      invalidatesTags: ["TODOS"], //invalida la lista , e quindi la ricaricarica,
      //indipendentemente dall'id che stiamo eliminando
    }),
    addTodos: builder.mutation({
      query: (todo) => ({
        url: "",
        method: "POST",
        body: todo,
      }),
      invalidatesTags: ["TODOS"], //invalida la lista , e quindi la ricaricarica,
      //indipendentemente dall'id che stiamo eliminando
    }),
    updateTodo: builder.mutation({
      query: ({ id, ...body }) => ({
        url: "/" + id,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["TODOS"], //invalida la lista , e quindi la ricaricarica,
      //indipendentemente dall'id che stiamo eliminando
    }),
  }),
});

export const {
  useAddTodosMutation,
  useUpdateTodoMutation,
  useDeleteTodosMutation,
  useGetTodosQuery,
} = todosApi;
