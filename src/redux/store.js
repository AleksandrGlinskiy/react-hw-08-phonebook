import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/auth-slice';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filter/filterSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};



const persistedAuthReducer = persistReducer(authPersistConfig, authReducer)

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    contacts: contactsReducer,
    filter: filterReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);