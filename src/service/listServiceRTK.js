import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { LISTS_URL } from "../config";

// Define a service using a base URL and expected endpoints
export const listsApi = createApi({
  //imposto il nome della reducer path
  reducerPath: "lists",
  //imposto i tag per avvertire l'api di quando cambia lo store???
  tagTypes: ["LIST"],
  //imposto la url di base
  baseQuery: fetchBaseQuery({ baseUrl: LISTS_URL }),
  //imposto gli endpoints
  endpoints: (builder) => ({
    
    getLists: builder.query({
      query: () => "",
      providesTags: (res,err)=> {
        if (err|| !res){
          return [{type:'LIST'}];
        }
        return res.map(e=>({type:'LIST', id:e.id}));
      },
      // o anche
      // (res,err)=> res.map((e)=>{type:'LIST', id:e.id}) cosi ritorna un array di tutti
      //gli oggetti che possono invalidare l'api????
    }),

    deleteList: builder.mutation({
      query: (id) => ({
        url: "/" + id,
        method: "DELETE",
      }),
      invalidatesTags: ["LIST"], //invalida la lista , e quindi la ricaricarica,
      //indipendentemente dall'id che stiamo eliminando
    }),

    addList: builder.mutation({
      query: (list) => ({
        url: "",
        method: "POST",
        body: list,
      }),
      invalidatesTags: ["LIST"], //invalida la lista , e quindi la ricaricarica,
      //indipendentemente dall'id che stiamo eliminando
    }),

    updateList: builder.mutation({
      query: ({id,...body}) => ({
        url: "/" + id,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["LIST"], //invalida la lista , e quindi la ricaricarica,
      //indipendentemente dall'id che stiamo eliminando
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useAddListMutation, useUpdateListMutation, useGetListsQuery, useDeleteListMutation } = listsApi;
