import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './contactsApi';
import filterSlicer from './filterSlicer';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterSlicer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});
