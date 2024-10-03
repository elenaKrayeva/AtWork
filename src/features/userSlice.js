import { createSlice } from '@reduxjs/toolkit';
import { mockUser } from '../mock/mock';
import avatar from '@assets/photo/avatar.jpg';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    avatarUrl: avatar,
    userName: mockUser.userName,
  },
  reducers: {
    setAvatarUrl(state, action) {
      state.avatarUrl = action.payload;
    },
    setName(state, action) {
      state.userName = action.payload;
    },
  },
});

export const { setAvatarUrl, setName } = userSlice.actions;
export default userSlice.reducer;
