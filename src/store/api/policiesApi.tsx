import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { Policy, SummaryPolicy } from "../../types";
import { getEnvironmentalVariable } from "../../utils/utils";

const SERVER_URL = getEnvironmentalVariable("VITE_API_BASE_URL");

export const policiesApi = createApi({
  reducerPath: "policiesApi",
  tagTypes: ["policies"],
  baseQuery: fetchBaseQuery({ baseUrl: SERVER_URL }),
  endpoints: (builder) => ({
    getPolicies: builder.query<SummaryPolicy[], void>({
      query: () => `/policies`,
      providesTags: ["policies"],
    }),
    getPoliciesById: builder.query<Policy, string>({
      query: (policyId) => `/policies/${policyId}`,
      providesTags: ["policies"],
    }),
  }),
});

export const { useGetPoliciesByIdQuery, useGetPoliciesQuery } = policiesApi;
