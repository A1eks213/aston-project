import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'https://656895329927836bd97515e3.mockapi.io/barca/app/';

interface IParams {
  search?: string | null;
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
      query: ({ search }) => {
        return {
          url: 'players',
          params: { search },
        };
      },
    }),
    getPlayerById: builder.query<IPlayer, string>({
      query: (id) => ({
        url: `players/${id}`,
      }),
    }),
  })
})
export const  { 
  useGetPlayersQuery,
  useGetPlayersBySearchQuery,
  useGetPlayerByIdQuery,
} = playersApi