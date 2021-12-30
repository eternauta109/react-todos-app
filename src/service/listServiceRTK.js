import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { LISTS_URL } from '../config'

// Define a service using a base URL and expected endpoints
export const listsApi = createApi({
  reducerPath: 'lists',
  baseQuery: fetchBaseQuery({ baseUrl: LISTS_URL }),
  endpoints: (builder) => ({
    getLists: builder.query({
      query: () => ``,
    }),
    deleteList: builder.mutation({
        query:(id)=>({
            url:'/'+id,
            method:'DELETE'
        })
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetListsQuery, useDeleteListMutation } = listsApi;