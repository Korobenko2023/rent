import { configureStore } from "@reduxjs/toolkit";
import { autosReducer } from "./autos/autosSlice";
import { favoritesReducer } from "./autos/favoritesSlice";
import persistStore from "redux-persist/es/persistStore";

import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import persistReducer from "redux-persist/es/persistReducer";

const persistConfig = {
  key: 'autos',
  storage,
  whitelist: ['favorites'],
};

export const store = configureStore({
    reducer: {
        autos: persistReducer(persistConfig, autosReducer),
        favorites: favoritesReducer,
    },
    middleware: (getDefaultMiddleware) =>
         getDefaultMiddleware({
           serializableCheck: {
              ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
         }),
    devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);



 
