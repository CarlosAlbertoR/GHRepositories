import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { userSlice } from "./slices/user";
import { repositorySlice } from "./slices/repository";
import { likeSlice } from "./slices/like";

const persistConfig = {
  key: "root",
  storage,
};

const persistedUserSlice = persistReducer(persistConfig, userSlice.reducer);

export const store = configureStore({
  reducer: {
    likes: likeSlice.reducer,
    user: persistedUserSlice,
    repositories: repositorySlice.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
