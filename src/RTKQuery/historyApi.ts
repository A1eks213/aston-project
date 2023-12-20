import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { transformGetHistory } from "../utils/transformGetHistory";

const BASE_URL = "https://aston-project-cc0a5-default-rtdb.europe-west1.firebasedatabase.app/";

export type HistoryResponse = {
  [uniqueId: string]: { searchName: string };
};

export const historyApi = createApi({
  reducerPath: "historyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ["History"],
  endpoints: (build) => ({
    getHistory: build.query<[string, string][], string>({
      query: (uid) => {
        return {
          url: `history/${uid}.json`,
          method: "GET",
        };
      },
      providesTags: ["History"],
      transformResponse: transformGetHistory,
    }),
    addInHistory: build.mutation({
      query: ({ searchName, uid, }) => {
        return {
          url: `history/${uid}.json`,
          method: "POST",
          body: { searchName },
        };
      },
      invalidatesTags: ["History"],
    }),
    removeFromHistory: build.mutation({
      query: ({ uid, uniqId }) => {
        return {
          url: `history/${uid}/${uniqId}.json`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["History"],
    }),
  }),
});

export const {
  useAddInHistoryMutation,
  useGetHistoryQuery,
  useRemoveFromHistoryMutation,
} = historyApi;