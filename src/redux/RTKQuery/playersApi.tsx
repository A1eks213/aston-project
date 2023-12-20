import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'https://656895329927836bd97515e3.mockapi.io/barca/app/';

interface IParams {
  name?: string | null;
  limit?: number,
  page?: number,
}

export interface IPlayer {
  name: string,
  age: number,
  price: number,
  position: string,
  img: string,
  id: string,
}
export const playersApi = createApi({
  reducerPath: 'playersApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: builder => ({
    getPlayers: builder.query<IPlayer[], void>({
      query: () => ({
        url: 'players',
      }),
    }),
    getPlayersBySearch: builder.query<IPlayer[], IParams>({
      query: ({ name }) => {
        return {
          url: 'players',
          params: { name },
        };
      },
    }),
    getPlayerById: builder.query<IPlayer, string>({
      query: (id) => ({
        url: `players/${id}`,
      }),
    }),
    getPlayersBySearchSuggest: builder.query<IPlayer[], IParams>({
      query: ({ name, limit = 5, page = 1 }) => {
        return {
          url: 'players',
          params: { name, limit, page },
        };
      },
    }),
  })
})
export const  { 
  useGetPlayersQuery,
  useGetPlayersBySearchQuery,
  useGetPlayerByIdQuery,
  useGetPlayersBySearchSuggestQuery
} = playersApi