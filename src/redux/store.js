import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/authSlice";
import { autosReducer } from "./autos/autosSlice";
import persistStore from "redux-persist/es/persistStore";
import storage from 'redux-persist/lib/storage';
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import persistReducer from "redux-persist/es/persistReducer";

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};


export const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authReducer),
        autos: autosReducer,
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



 
