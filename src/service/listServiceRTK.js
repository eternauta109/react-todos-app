import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { LISTS_URL } from "../config";

// Define a service using a base URL and expected endpoints
export const listsApi = createApi({
  //imposto il nome della reducer path
  reducerPath: "lists",
  //imposto i tag per avvertire l'api di quando cambia lo store???
  tagTypes: ["LIST"],
  //imposto la url di base
  baseQuery: fetchBaseQuery({
    baseUrl: LISTS_URL,
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
  //imposto gli endpoints
  endpoints: (builder) => ({
    getLists: builder.query({
      query: () => ({
        Accept: "application/json",
      }),
      providesTags: (res, err) => {
        if (err || !res || res.data) {
          return [{ type: "LIST" }];
        }
        return res.data.map((e) => ({ type: "LIST", id: e.id }));
      },
      // o anche
      // (res,err)=> res.map((e)=>{type:'LIST', id:e.id}) cosi ritorna un array di tutti
      //gli oggetti che possono invalidare l'api????
    }),

    deleteList: builder.mutation({
      query: (id) => ({
        url: "/" + id,
        method: "DELETE",
        headers: {
          Accept: "application/json",
        },
      }),
      invalidatesTags: ["LIST"], //invalida la lista , e quindi la ricaricarica,
      //indipendentemente dall'id che stiamo eliminando
    }),

    addList: builder.mutation({
      query: (list) => ({
        url: "",
        method: "POST",
        body: list,
        headers: {
          Accept: "application/json",
        },
      }),
      invalidatesTags: ["LIST"], //invalida la lista , e quindi la ricaricarica,
      //indipendentemente dall'id che stiamo eliminando
    }),

    updateList: builder.mutation({
      query: ({ id, ...body }) => ({
        url: "/" + id,
        method: "PATCH",
        headers: {
          Accept: "application/json",
        },
        body,
      }),
      invalidatesTags: ["LIST"], //invalida la lista , e quindi la ricaricarica,
      //indipendentemente dall'id che stiamo eliminando
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useAddListMutation,
  useUpdateListMutation,
  useGetListsQuery,
  useDeleteListMutation,
} = listsApi;
