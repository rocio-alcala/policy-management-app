import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getEnvironmentalVariable } from "../../utils/utils";

const SERVER_URL = getEnvironmentalVariable("VITE_API_BASE_URL");
console.log(SERVER_URL)

export const policiesApi = createApi({
  reducerPath: "policiesApi",
  tagTypes: ["policies"],
  baseQuery: fetchBaseQuery({ baseUrl: SERVER_URL }),
  endpoints: (builder) => ({   // faltan tipados
    getPolicies: builder.query<any, void>({
      query: () => `/policies`, 
      providesTags: ["policies"]
    }),
    getPoliciesById: builder.query<any, string>({
      query: (policyId) => `/policies/${policyId}`,
      providesTags: ["policies"],
    })
  })
});

export const { useGetPoliciesByIdQuery, useGetPoliciesQuery} = policiesApi


