import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  deleteContact,
  addContact,
  updateContact,
} from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFulfilledGet = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;
};

const handleFulfilledDelete = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = state.items.filter(item => item.id !== action.payload.id);
};

const handleFulfilledCreate = (state, action) => {
  state.isLoading = false;
  state.items.push(action.payload);
  state.error = null;
};

const handleFulfilledUpdate = (state, action) => {
  state.isLoading = false;

  const index = state.items.findIndex(item => item.id === action.payload.id);
  if (index !== -1) {
    state.items[index] = action.payload;
  }

  state.error = null;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, handleFulfilledGet)
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, handleFulfilledDelete)
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, handleFulfilledCreate)
      .addCase(addContact.rejected, handleRejected)
      .addCase(updateContact.pending, handlePending)
      .addCase(updateContact.fulfilled, handleFulfilledUpdate)
      .addCase(updateContact.rejected, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
