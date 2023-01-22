import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';

const rootReduser = combineReducers({
  contacts: contactsReducer,
});

export const store = configureStore({
  reducer: rootReduser,
});
