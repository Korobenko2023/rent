import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/authSlice";
import { autosReducer } from "./autos/autosSlice";
import persistStore from "redux-persist/es/persistStore";

import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

export const store = configureStore({
    reducer: {
        auth: authReducer,
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



 
