import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { logOut, register, refreshUser, logIn } from './operations';

const initialState = {
  user: { name: '', email: '' },
  token: '',
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isLoggedIn = true;
      toast.success(
        `You have successfully registered, Welcome ${state.user.name}!`
      );
    },
    [register.rejected](state, _) {
      state.isLoggedIn = false;
      toast.error('Please try again, enter a valid data');
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      toast.success(`You have successfully login, Welcome ${state.user.name}!`);
    },
    [logIn.rejected](state, _) {
      state.isLoggedIn = false;
      toast.error('Wrong email or password, please try again');
    },
    [logOut.fulfilled](state) {
      toast.info(`Come back, see you later, ${state.user.name}!`);
      state.user = { name: '', email: '' };
      state.token = '';
      state.isLoggedIn = false;
    },
    [refreshUser.pending](state) {
      state.isRefreshing = true;
    },
    [refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isRefreshing = false;
      state.isLoggedIn = true;
    },
    [refreshUser.rejected](state) {
      state.isRefreshing = false;
    },
  },
});

export const authReducer = authSlice.reducer;
