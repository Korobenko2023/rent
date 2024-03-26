import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { autosReducer } from "./autos/autosSlice";
import { favoritesReducer } from "./autos/favoritesSlice";
import { persistStore } from "redux-persist";
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import persistReducer from "redux-persist/es/persistReducer";

const rootReducer = combineReducers({
  autos: autosReducer,
  favorites: favoritesReducer,
});

const persistConfig = {
  key: 'autos',
  storage,
  whitelist: ['favorites'],
};

const persistedRootReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedRootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);

