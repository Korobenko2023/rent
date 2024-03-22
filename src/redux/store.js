import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts/contactsSlice";
import { filterReducer } from "./contacts/filterSlice";
import persistStore from "redux-persist/es/persistStore";
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import { authReducer } from "./auth/authSlice";

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer,
        auth: authReducer,
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
 
