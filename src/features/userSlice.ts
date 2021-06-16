import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

export const userSlice = createSlice({
  name: 'name',
  initialState: {
    user: { uid: '', photoUrl: '', displayName: '' },
  },

  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = { uid: '', photoUrl: '', displayName: '' };
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectCount = (state: RootState) => state.user.user;

export default userSlice.reducer;
