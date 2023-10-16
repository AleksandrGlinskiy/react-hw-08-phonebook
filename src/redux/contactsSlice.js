import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, deleteContact, addContact } from './operations';

const handlePending = state => {
  state.contacts.isLoading = true;
};

const handleRejected = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = action.payload;
};

const handleFulfilledGet = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = null;
  state.contacts.items = action.payload;
};

const handleFulfilledDelete = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = null;
  state.contacts.items = state.contacts.items.filter(
    item => item.id !== action.payload.id
  );
};

const handleFulfilledCreate = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.items.push(action.payload);
  state.contacts.error = null;
  
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  },
  reducers: {
    filterContacts(state, action) {
      state.filter = action.payload;
    },
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
      .addCase(addContact.rejected, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;

export const { filterContacts } = contactsSlice.actions;


