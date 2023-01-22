import { createSlice } from '@reduxjs/toolkit';
// import * as contactsActions from './Actions';
import { fetchContacts, addContact, deleteContact } from './Operations';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

const basicPending = state => {
  state.isLoading = true;
  state.error = null;
};

const basicRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: {
    [fetchContacts.pending]: basicPending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.pending]: basicRejected,

    [addContact.pending]: basicPending,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.unshift(action.payload);
    },
    [addContact.rejected]: basicRejected,

    [deleteContact.pending]: basicPending,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
    [deleteContact.rejected]: basicRejected,
  },
});

// export const getFilter = state => state.contacts.filter;
// export const getContacts = state => state.contacts.contacts;

export const contactsReducer = contactsSlice.reducer;

// export default combineReducers({
//   entities,
//   isLoading,
// });

// addContact(state, { payload }) {
//   state.contacts.push(payload);
// },
// deleteContact(state, { payload }) {
//   state.contacts = state.contacts.filter(contact => contact.id !== payload);
// },
// getFilterContsacts(state, { payload }) {
//   state.filter = payload;
// },
