import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice'
import { playersApi } from '../RTKQuery/playersApi';
import { favoritesApi } from '../RTKQuery/favoritesApi';
export const store = configureStore({
  reducer: {
    user: userReducer,
    [playersApi.reducerPath]: playersApi.reducer,
    [favoritesApi.reducerPath]: favoritesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(playersApi.middleware).concat(favoritesApi.middleware)
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>