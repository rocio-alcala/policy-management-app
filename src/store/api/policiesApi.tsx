import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const SERVER_URL = "";

export const policiesApi = createApi({
  reducerPath: "policiesApi",
  tagTypes: ["policies"],
  baseQuery: fetchBaseQuery({ baseUrl: SERVER_URL }),
  endpoints: (builder) => ({   //querys son ejemplificadoras y faltan tipados!!!
    getPolicies: builder.query({
      query: () => `/policies`, 
      providesTags: ["policies"]
    }),
    getPoliciesById: builder.query({
      query: (id) => `/policies/${id}`,
      providesTags: ["policies"],
    }),
    updateBadDebt: builder.mutation({
      query: (updatedPolicy) => ({
        url: `/policies/${updatedPolicy.id}`,
        method: "PUT",
        body: updatedPolicy
      }),
      invalidatesTags: ["policies"],
    }),
    postEmail: builder.mutation({
      query: (email) => ({
        url: "/confirmationemail",
        method: "POST",
        body: email,
      }),
    }),
  })
});
