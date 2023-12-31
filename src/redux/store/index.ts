import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice'
import { playersApi } from '../RTKQuery/playersApi';
import { favoritesApi } from '../RTKQuery/favoritesApi';
import { historyApi } from '../RTKQuery/historyApi';
import { listenerMiddleware } from '../middleware/authorizationListener';
export const store = configureStore({
  reducer: {
    user: userReducer,
    [playersApi.reducerPath]: playersApi.reducer,
    [favoritesApi.reducerPath]: favoritesApi.reducer,
    [historyApi.reducerPath]: historyApi.reducer,

  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(playersApi.middleware)
    .concat(favoritesApi.middleware)
    .concat(historyApi.middleware)
    .concat(listenerMiddleware.middleware),
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
export * as userSelectors from '../selectors/userSelectors'