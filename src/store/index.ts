import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice'
import { playersApi } from '../RTKQuery/playersApi';
export const store = configureStore({
  reducer: {
    user: userReducer,
    [playersApi.reducerPath]: playersApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(playersApi.middleware)
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>