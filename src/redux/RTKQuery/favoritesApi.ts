import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPlayer } from "./playersApi";
import { transformGetFavorites } from "../../utils/transformGetFavorites";

const BASE_URL = 'https://aston-project-cc0a5-default-rtdb.europe-west1.firebasedatabase.app/';

interface QueryParams {
  id: string;
  uid: string;
}

export interface ResponseParams {
  [id: string]: {
    [playerId: string]: IPlayer;
  };
}

export const favoritesApi = createApi({
  reducerPath: "favoritesApi",
  tagTypes: ["Favorites", "FavoritePage"],
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (build) => ({
    getFavorites: build.query<IPlayer[], string>({
      query: (id) => {
        return {
          url: `favorites/${id}.json`,
        };
      },
      providesTags: ["FavoritePage"],
      transformResponse: transformGetFavorites,
    }),
    addInFavorites: build.mutation({
      query: ({ player, uid }) => {
        return {
          url: `favorites/${uid}/${"isFavorite" + player.id}.json`,
          method: "POST",
          body: player,
        };
      },
      invalidatesTags: (_, __, { player }: { player: IPlayer }) => {
        return [{ type: "Favorites", id: player.id }, "FavoritePage"];
      },
    }),
    removeFromFavorites: build.mutation({
      query: ({ id, uid }) => {
        return {
          url: `favorites/${uid}/${"isFavorite" + id}.json`,
          method: "DELETE",
        };
      },
      invalidatesTags: (_, __, { id }: { id: string }) => {
        return [{ type: "Favorites", id }, "FavoritePage"];
      },
    }),
    getFavoritesById: build.query<ResponseParams, QueryParams>({
      query: ({ id, uid }) => {
        return {
          url: `favorites/${uid}/${"isFavorite" + id}.json`,
        };
      },
      providesTags: (_, __, { id }) => [{ type: "Favorites", id }],
    }),
  }),
});

export const {
  useGetFavoritesByIdQuery,
  useGetFavoritesQuery,
  useAddInFavoritesMutation,
  useRemoveFromFavoritesMutation,
} = favoritesApi;