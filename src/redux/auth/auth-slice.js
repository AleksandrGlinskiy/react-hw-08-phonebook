import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, register } from './auth-operations';

const handleFulfilled = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

const handleLogOutFullfilled = (state, action) => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false
}

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, handleFulfilled)
      .addCase(logIn.fulfilled, handleFulfilled)
      .addCase(logOut.fulfilled, handleLogOutFullfilled)
  },
});

export const authReducer = authSlice.reducer;
